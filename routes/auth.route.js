import express from 'express';

import controllers from '../controllers/auth.controller.js';
import validate from '../validate/user.validate.js';

var router = express.Router()
router.get('/login', controllers.login);
router.post('/login', validate.postLogin, controllers.postLogin);


export default router;