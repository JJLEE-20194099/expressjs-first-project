import express from 'express';

import controllers from '../controllers/users.controller.js';

var router = express.Router()
router.get('/', controllers.index);

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:id', controllers.get);

router.post('/create', controllers.postCreate);

export default router;
