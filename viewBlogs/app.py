from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from auth.app import login_manager
from flask_login import login_required, current_user
from datetime import datetime
from auth.database import dbConfig
from pytz import timezone
from flask_cors import CORS

db = SQLAlchemy()
app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
app.config['SECRET_KEY'] = 'Bruce Wayne is Batman'
app.config['SQLALCHEMY_DATABASE_URI'] = dbConfig
db.init_app(app)
login_manager.init_app(app)
localtime = timezone('America/Argentina/Mendoza')

#from auth.models import Users
#@login_manager.user_loader
#def load_user(id):
#    return Users.query.get(id)

from .models import Blogs
from .database import dbConfig
@app.route('/new', methods=['POST'])
#@login_required
def create():
    app.config['SQLALCHEMY_DATABASE_URI'] = dbConfig
    data = request.json
    blog = {
        ###'author_id': current_user.id,
        'author_id': data['autor'],
        'title': data['title'],
        'date': str(localtime.localize(datetime.now()))[:16],
        'content': data['content']
    }
    new_blog = Blogs(author_id=blog['author_id'],title=blog['title'],date=blog['date'],content=blog['content'])
    db.session.add(new_blog)
    db.session.commit()
    return jsonify({'result': 'Blog creado'})

@app.route('/blog/<string:blogs_id>')
def blog__detail(blogs_id):
    app.config['SQLALCHEMY_DATABASE_URI'] = dbConfig
    result = Blogs.query.filter_by(id=blogs_id).first()
    blog = {
            'id': result.id,
            'author_id': result.author_id,
            'title': result.title,
            'date': result.date,
            'content': result.content
        }
    return jsonify(blog)

@app.route('/')
def blog_list():
    app.config['SQLALCHEMY_DATABASE_URI'] = dbConfig
    results = Blogs.query.all()
    blogs_list = []
    for result in results:
        blogs_list.append({
            'id': str(result.id),
            'author_id': result.author_id,
            'title': result.title,
            'date': result.date,
            'content': result.content
            })
    return jsonify(blogs_list)

