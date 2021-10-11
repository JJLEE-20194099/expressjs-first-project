import express from 'express';

import controllers from '../controllers/users.controller.js';
import validate from '../validate/user.validate.js';

import auth_middleware from '../middleware/auth.middleware.js'

var router = express.Router()
router.get('/', auth_middleware.requireAuth, controllers.index);

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:id', controllers.get);

router.post('/create', validate.postCreate, controllers.postCreate);

export default router;
