import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
import productRoute from './routes/product.route.js';

import sessionMiddleware from './middleware/session.middlware.js';

const port = 3000

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware.signCookie)

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.render('index.pug', {
        name: 'JJLee',
    });
});

app.get('/getuser', (req, res)=>{
    //shows all the cookies
    res.send(req.cookies);
});

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);

app.listen(port, () => console.log(`${port}`));
