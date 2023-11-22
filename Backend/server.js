const express = require('express')
const {
    dbConnect
} = require('./Src/utils/db')
const app = express()
const cors = require('cors')
const http = require('http')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()
//const socket = require('socket.io')

const server = http.createServer(app)


app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));

// const io = socket(server, {
//     cors: {
//         origin: '*',
//         credentials: true
//     }
// })


app.use(bodyParser.json())
app.use(cookieParser())


//app.use('/api', require('./Src/router/chatRoutes'))
//app.use('/api', require('./routes/paymentRoutes'))
//app.use('/api', require('./routes/dashboard/dashboardIndexRoutes'))
//app.use('/api/home', require('./routes/home/homeRoutes'))
//app.use('/api', require('./routes/order/orderRoutes'))
//app.use('/api', require('./routes/home/cardRoutes'))
app.use('/api', require('./Src/router/authRouter'));
//app.use('/api', require('./routes/home/customerAuthRoutes'))
//app.use('/api', require('./routes/dashboard/sellerRoutes'))
//app.use('/api', require('./routes/dashboard/categoryRoutes'))
app.use('/api', require('./Src/router/dashbord/productRoutes'))
const port = process.env.PORT
dbConnect()
server.listen(port, () => console.log(`Server is running on port ${port}!`))