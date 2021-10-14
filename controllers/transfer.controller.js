import shortid from 'shortid';
import db from '../db/db.js'

const transfer_controllers = {
    create: function(req, res, next) {
        res.render('transfer/create.pug');
    },
    postCreate: function(req, res, next) {
        const data = {
            id: shortid.generate(),
            amount: parseInt(req.body.amount),
            accountId: req.body.accountId
        }
       
        db.data['transfers'].push(data)
        db.write()
        res.redirect('create')
    }
}

export default transfer_controllers;