import express from 'express';

import controllers from '../controllers/product.controller.js';

const router = express.Router();
router.get('/', controllers.index)

export default router;
