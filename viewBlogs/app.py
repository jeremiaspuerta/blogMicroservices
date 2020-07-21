from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from auth.app import login_manager
from flask_login import login_required, current_user
import datetime

db = SQLAlchemy()
app = Flask(__name__)
app.config['SECRET_KEY'] = 'Bruce Wayne is Batman'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:53663774Mysql-@localhost:3306/auth'
db.init_app(app)
login_manager.init_app(app)

from auth.models import Users
@login_manager.user_loader
def load_user(id):
    return Users.query.get(id)

from .models import Blogs
@app.route('/probando')
def prueba():
    return print(Users.query.get(id))

@app.route('/new', methods=['POST'])
@login_required
def create():
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:53663774Mysql-@localhost:3306/blog'
    data = request.json
    blog = {
        'author_id': current_user.id,
        'title': data['title'],
        'date': datetime.datetime.now(),
        'content': data['content']
    }
    new_blog = Blogs(author_id=blog['author_id'],title=blog['title'],date=blog['date'],content=blog['content'])
    db.session.add(new_blog)
    db.session.commit()
    return jsonify({'result': 'Blog creado'})

