import express from 'express';

import controllers from '../controllers/users.controller.js';
import validate from '../validate/user.validate.js';

var router = express.Router()
router.get('/', controllers.index);

router.get('/cookie', function(req, res) {
    res.cookie('user-id', 12345);
    res.send('Hello');
});

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:id', controllers.get);

router.post('/create', validate.postCreate, controllers.postCreate);

export default router;
