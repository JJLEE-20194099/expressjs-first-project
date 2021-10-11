import db from '../db/db.js';

const auth_middleware = {
    requireAuth: function(req, res, next) {
        if (!req.signedCookies.userId) {
            
            res.redirect('/auth/login');
            return;
        }
        const user = db.get('user').find({
            id:  req.signedCookies.userId
        }).value();
        if (!user) {
            
            res.redirect('/auth/login');
            return;
        }
        console.log(3)
        next();
        
    }
}

export default auth_middleware;