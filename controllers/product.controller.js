import db from '../db/db.js';

const controllers = {
    index: function(req, res) {
        var { page } = req.query;
        page = page ? parseInt(page) : 1;
        const pagination_constant = 8;
        const { products } = db.data;
        var showedPaginationIndexes = [];
        if (page % 3 == 0) {
            showedPaginationIndexes = [page - 2, page - 1, page];
        } else if (page % 3 == 1) {
            showedPaginationIndexes = [page, page + 1, page + 2]
        } else {
            showedPaginationIndexes = [page - 1, page, page + 1];
        }
        res.render('./product/index.pug', {
            products: products.slice((page - 1) * pagination_constant, page * pagination_constant),
            showedPaginationIndexes: showedPaginationIndexes,
            currentPage: page
        })
    }
}

export default controllers;
