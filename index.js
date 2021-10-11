import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

const port = 3000

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser(process.env.SESSION_SECRET));

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.render('index.pug', {
        name: 'JJLee',
    });
});

app.use('/users', userRoute);
app.use('/auth', authRoute)

app.listen(port, () => console.log(`${port}`));
