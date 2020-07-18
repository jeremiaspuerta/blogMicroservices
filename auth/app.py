from flask import Flask, jsonify, request
from flask_login import login_user, logout_user, login_required, current_user
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
import json
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()
app = Flask(__name__)
app.config['SECRET_KEY'] = 'Bruce Wayne is Batman'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:53663774Mysql-@localhost:3306/auth'
db.init_app(app)
login_manager = LoginManager()
login_manager.init_app(app)

from .models import Users


@login_manager.user_loader
def load_user(user_id):
    return Users.query.get(int(user_id))


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = {
        'email': data['email'],
        'password': data['password']
    }
    user = Users.query.filter_by(email=user['email']).first()
    login_user(user)
    return jsonify({'result': 'Usuario iniciado'}), 201

@app.route('/probando')
@login_required
def priueba():
    return current_user.name

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    user = {
        'email': data['email'],
        'name': data['name'],
        'password': data['password']
    }
    new_user = Users(email=user['email'],name=user['name'],password=user['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'result': 'Usuario registrado'}), 201
