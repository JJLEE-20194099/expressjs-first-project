import express from 'express';

import controllers from '../controllers/cart.controller.js';

var router = express.Router();

router.get('/add/:productId', controllers.addToCart);

export default router;