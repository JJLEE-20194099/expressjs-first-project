import { devNull } from 'os';
import shortid from 'shortid';

import db from '../db/db.js';

const session_middleware = {
    signCookie: function(req, res, next) {
        if (!req.signedCookies.sessionId) {
            var sessionId = shortid.generate()
            res.cookie('sessionId', sessionId, {
                signed: true
            })
            db.data['sessions'].push({
                id: sessionId,
            })
            db.write()
        }

        next();
    }
}

export default session_middleware;