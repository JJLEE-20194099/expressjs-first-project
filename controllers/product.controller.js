import db from '../db/db.js';

const controllers = {
    index: function(req, res) {
        var { page } = req.query;
        page = page ? parseInt(page) : 1;
        const pagination_constant = 8;
        const { products } = db.data;
        res.render('./product/index.pug', {
            products: products.slice((page - 1) * pagination_constant, page * pagination_constant),
        })
    }
}

export default controllers;
