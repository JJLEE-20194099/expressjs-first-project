import db from '../db/db.js';

const auth_middleware = {
    requireAuth: function(req, res, next) {
        if (!req.signedCookies.userId) {
    
            res.redirect('/auth/login');
            return;
        }

        function checkSignedCookies(item) {
            return item.id === req.signedCookies.userId
        }

        const user = db.data['users'].find(checkSignedCookies)
        if (!user) {
            res.redirect('/auth/login');
            return;
        }
        console.log(3)
        next();
        
    }
}

export default auth_middleware;