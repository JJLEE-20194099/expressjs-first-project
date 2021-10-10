import express from 'express';
import bodyParser from 'body-parser';

import router from './routes/user.route.js';

const port = 3000

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.render('index.pug', {
        name: 'JJLee',
    });
});

app.use('/users', router);

app.listen(port, () => console.log(`${port}`));
