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
cors = CORS(app, resources={r"/": {"origins": "*"}})
app.config['SECRET_KEY'] = 'Bruce Wayne is Batman'
app.config['SQLALCHEMY_DATABASE_URI'] = dbConfig
db.init_app(app)
login_manager.init_app(app)
localtime = timezone('America/Argentina/Mendoza')

from auth.models import Users
@login_manager.user_loader
def load_user(id):
    return Users.query.get(id)

@app.route('/<string:blogs_id>/createcomment', methods=['POST'])
#@login_required
def create(blogs_id):
    data = request.json
    comment = {
        'author_id': current_user.id,
        'blog_id': blogs_id,
        'title': data['title'],
        'date': str(localtime.localize(datetime.now()))[:16],
        'content': data['content']
    }
    from .models import Comments
    from .database import dbConfig
    app.config['SQLALCHEMY_DATABASE_URI'] = dbConfig
    new_comment = Comments(author_id=comment['author_id'],blog_id=comment['blog_id'],title=comment['title'],date=comment['date'],content=comment['content'])
    db.session.add(new_comment)
    db.session.commit()
    return jsonify({'result': 'Comentario creado'})

@app.route('/<string:blogs_id>/comments')
#@login_required
def comments__detail(blogs_id):
    from .models import Comments
    from .database import dbConfig
    app.config['SQLALCHEMY_DATABASE_URI'] = dbConfig
    result = Comments.query.filter_by(id=blogs_id).first()
    comment = {
            'id': result.id,
            'author_id': result.author_id,
            'blog_id': blogs_id,
            'title': result.title,
            'date': result.date,
            'content': result.content
        }
    return jsonify(comment)



