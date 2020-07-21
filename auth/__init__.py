from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

db = SQLAlchemy()

def create_app():
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

    return app