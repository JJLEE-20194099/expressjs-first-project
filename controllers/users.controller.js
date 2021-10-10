import db from '../db/db.js';
import shortid from 'shortid';

const controllers={
    index: function (resquest, response) {
        const { users } = db.data;
        response.render('./users/index.pug', {
            users: users
        });
    },
    search: function (req, res) {
        const q = req.query.q;
        const matchedUsers = db.data.users.filter(function (user) {
            return user.name.toLowerCase().indexOf(q.toLowerCase()) >= 0;
        })
        res.render('./users/index.pug', {
            users: matchedUsers,
            query: q
        });
    },
    create:  function (req, res) {
        res.render('./users/create.pug')
    },
    get: function(req, res) {
        const userID = req.params.id;
        const user = db.data.users.find((item) => {
            return item.id === userID
        });
        res.render('./users/view.pug', {
            user: user
        });
    },
    postCreate: function (req, res) {
        const { users } = db.data;
        req.body.id = shortid.generate();

        const errors = [];

        if (!req.body.name) {
            errors.push("Name is required");
        }
        if (!req.body.phone) {
            errors.push("Phone is required")
        }

        if (errors.length) {
            res.render('users/create', {
                errors: errors,
                values: req.body
            });
            return ;
        }

        users.push(req.body);
        db.write();
        res.redirect('/users')
    }
}

export default controllers;