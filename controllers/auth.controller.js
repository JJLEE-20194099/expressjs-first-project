import db from '../db/db.js';

const auth_controllers = {
    login: function(req, res) {
        res.render('./auth/login.pug');
    },
    postLogin: function(req, res) {
        const {key, password} = req.body;        
        const {users} = db.data;
        const errors = [];
        
        const checkLogin = function(item){
            if (password !== item.password) {
                return false;
            }
            
            if (key !== item.username && 
                key !== item.phone && 
                key !== item.email 
            ) {return false;}
            
            return true;
            
        }

        if (users.filter(checkLogin).length) {
            res.cookie('userId: ', users.filter(checkLogin)[0].id)
            res.render('./users/index.pug', {
                users: users
            });
        } else {
            errors.push('username or phone or email or password is not correct');
            res.render('./auth/login.pug', {
               errors: errors,
               values: req.body
            });
        }

    }
};



export default auth_controllers;