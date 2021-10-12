import express from 'express';

import controllers from '../controllers/users.controller.js';
import validate from '../validate/user.validate.js';
import auth_middleware from '../middleware/auth.middleware.js';
import path from 'path';

import multer from 'multer'

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
})

const maxSize = 1 * 1000 * 1000 * 1000 * 1000;
var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize},
    fileFilter: function(req, file, cb) {
        var filetypes = /jpeg|jpg|png|gif/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: Filw upload only supports the following filetypes - " + filetypes);
    }
})

var router = express.Router()
router.get('/', auth_middleware.requireAuth, controllers.index);

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:id', controllers.get);

router.post('/create', 
    upload.single('avatar'), 
    validate.postCreate, 
    controllers.postCreate
);

export default router;
