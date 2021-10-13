import shortid from 'shortid';
const session_middleware = {
    signCookie: function(req, res, next) {
        if (!req.signedCookies.sessionId) {
            res.cookie('sessionId', shortid.generate, {
                signed: true
            })
        }

        next();
    }
}

export default session_middleware;