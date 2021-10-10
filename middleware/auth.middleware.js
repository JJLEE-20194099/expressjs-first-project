import db from '../db/db.js';

const auth_middleware = {
    requireAuth: function(req, res, next) {
        if (!req.cookies.userId) {
            res.redirect('/auth/login');
            return;
        }
        const user = db.get('user').find({id: req.cookies.userId}).value();
        if (!user) {
            res.redirect('/auth/login');
            return;
        }
        next();
        
    }
}

export default auth_middleware;