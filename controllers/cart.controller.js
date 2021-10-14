import db from '../db/db.js';
const cart_controllers = {
    addToCart: function(req, res) {
        var productId = req.params.productId;
        var sessionId = req.signedCookies.sessionId;
        
        if (!sessionId) {
            res.redirect('/products');
            return ;
        }

        function findSessionId(item) {
            return item.id === sessionId
        }



        db.data['sessions']
        .find(findSessionId)
        ['cart'] = {}
        db.data['sessions']
        .find(findSessionId)['cart']['productId'] = 1
        db.write();

        res.redirect('/products');

    },
}

export default cart_controllers;