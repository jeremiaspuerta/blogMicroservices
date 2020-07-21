from flask_login import UserMixin
from .app import db

class Blogs(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    author_id = db.Column(db.Integer, unique=True)
    title = db.Column(db.String(100))
    date = db.Column(db.DateTime())
    content = db.Column(db.Text())