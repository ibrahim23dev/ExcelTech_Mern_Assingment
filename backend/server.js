const express = require('express')
const {
    dbConnect
} = require('./utiles/db');
const app = express()
const cors = require('cors')
const http = require('http')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const server = http.createServer(app)

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))

app.use(bodyParser.json())
app.use(cookieParser())
//app.use('/api', require('./routes/dashboard/dashboardIndexRoutes'))
app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/taskRouter'));
//app.use('/api', require('./routes/dashboard/categoryRoutes'))
//app.use('/api', require('./routes/dashboard/productRoutes'))
const port = process.env.PORT
dbConnect()
server.listen(port, () => console.log(`Server is running on port ${port}!`))