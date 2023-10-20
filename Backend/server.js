const express = require('express');
const app = express();
require('dotenv').config();
const {dbConnect} =require('./Src/utils/db.js')
const port = process.env.PORT;

const cors = require('cors'); // Change 'Cors' to 'cors'
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(cookieParser());
app.use(bodyParser.json());

// Enable CORS for all routes and specify the allowed origin, methods, and credentials
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST',
  credentials: true,
}));

app.use('/api', require('./Src/router/authRouter.js'));
dbConnect();
app.listen(port, () => {
  console.log(`Server is Running on port ${port}!`);
});
