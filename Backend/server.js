const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { dbConnect } = require('./Src/utils/db');

const app = express();
const server = http.createServer(app);
const io = socket(server, {
    cors: {
        origin: ['http://localhost:3000', 'http://localhost:3001'],
        credentials: true
    }
});

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

// Socket related functions
let allCustomer = [];
let allSeller = [];
let admin = {};

const addUser = (customerId, socketId, userInfo) => {
    const checkUser = allCustomer.some(u => u.customerId === customerId);
    if (!checkUser) {
        allCustomer.push({ customerId, socketId, userInfo });
    }
};

const addSeller = (sellerId, socketId, userInfo) => {
    const checkSeller = allSeller.some(u => u.sellerId === sellerId);
    if (!checkSeller) {
        allSeller.push({ sellerId, socketId, userInfo });
    }
};

const findCustomer = (customerId) => allCustomer.find(c => c.customerId === customerId);
const findSeller = (sellerId) => allSeller.find(c => c.sellerId === sellerId);

const remove = (socketId) => {
    allCustomer = allCustomer.filter(c => c.socketId !== socketId);
    allSeller = allSeller.filter(c => c.socketId !== socketId);
};

const removeAdmin = (socketId) => {
    if (admin.socketId === socketId) {
        admin = {};
    }
};

// Socket.io event handling
io.on('connection', (socket) => {
    console.log('Socket server is connected...');

    socket.on('add_user', (customerId, userInfo) => {
        addUser(customerId, socket.id, userInfo);
        io.emit('activeSeller', allSeller);
        io.emit('activeCustomer', allCustomer);
    });

    // ... (other socket events)

   socket.on('disconnect', () => {
        console.log('User disconnect');
         remove(socket.id);
         removeAdmin(socket.id);
       io.emit('activeAdmin', { status: false });
         io.emit('activeSeller', allSeller);
         io.emit('activeCustomer', allCustomer);
     });
 });

// Express routes
app.use('/api', require('./Src/router/chatRoutes'));
app.use('/api', require('./Src/router/paymentRoutes'))
app.use('/api', require('./Src/router/dashbord/dashboardIndexRoutes'));
app.use('/api/home', require('./Src/router/home/homeRoutes'))
app.use('/api', require('./Src/router/order/orderRoutes'))
app.use('/api', require('./Src/router/home/cardRoutes'));
app.use('/api', require('./Src/router/authRouter'));
app.use('/api', require('./Src/router/home/customerAuthRoutes'));
app.use('/api', require('./Src/router/dashbord/sellerRoutes'));
app.use('/api', require('./Src/router/dashbord/categoryRoutes'));
app.use('/api', require('./Src/router/dashbord/productRoutes'))
app.get('/', (req, res) => res.send('Hello World!'))
// ... (other routes)

app.get('/', (req, res) => res.send('Hello World!'));

// Server setup
const port = process.env.PORT || 3000;
dbConnect();

server.listen(port, () => console.log(`Server is running on port ${port}!`));


