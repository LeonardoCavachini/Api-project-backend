const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const userController = require('./app/controllers/userController');
const favComController = require('./app/controllers/comFavController');
const favCharcController = require('./app/controllers/characFavController');

const app = express();

app.use(bodyparser.json());
app.use(cors());

app.use('/', userController);
app.use('/comFavorite', favComController);
app.use('/charcFavorite', favCharcController);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server running on port ${port}`));