import express from 'express';

import controllers from '../controllers/transfer.controller.js';

var router = express.Router();
router.get('/create', controllers.create);
router.post('/create', controllers.postCreate);


export default router;