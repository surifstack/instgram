require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('./db/db')
app.use(cors());
app.use(express.json());

const posts = require('./modules/post')

const models = require('./modules/modules');
app.use(models);
app.use(posts)


app.listen(port , () =>console.log(`The Port is ${port}`))