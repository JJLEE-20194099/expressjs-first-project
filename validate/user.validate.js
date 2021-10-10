const validate = {
    postCreate: function(req, res, next) {
        const errors = [];
    
        if (!req.body.name) {
            errors.push("Name is required");
        }
        if (!req.body.phone) {
            errors.push("Phone is required")
        }
    
        if (errors.length) {
            res.render('users/create', {
                errors: errors,
                values: req.body
            });
            return ;
        }
        next();
    },
    postLogin: function(req, res, next) {
        const errors = [];
        if (!req.body.key) {
            errors.push('Email or phone or username is required!');
        }

        if (!req.body.password) {
            errors.push('Password is required!');
        }

        if (errors.length) {
            res.render('./auth/login.pug', {
                errors: errors,
                values: req.body
            });
            return ;
        }
        next();
    }

}

export default validate;