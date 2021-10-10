import express from 'express';

import auth_controllers from '../controllers/auth.controller.js';
import validate from '../validate/user.validate.js';

var router = express.Router()
router.get('/login', auth_controllers.login);
router.post('/login', validate.postLogin, auth_controllers.postLogin);


export default router;