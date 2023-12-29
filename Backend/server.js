const express = require('express');
const http = require('http');
//const socket = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { dbConnect } = require('./Src/utils/db');

const app =new express();
const server = http.createServer(app);
 //const io = socket(server, {
     //cors: {
         //origin: ['http://localhost:3000', 'http://localhost:3001'],
         //credentials: true
    // }
 //});

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

 //Socket related functions

 
  //Socket.io event handling
 
//      ... (other socket events)

//    socket.on('disconnect', () => {
//          console.log('User disconnect');
//           remove(socket.id);
//           removeAdmin(socket.id);
//         io.emit('activeAdmin', { status: false });
//           io.emit('activeSeller', allSeller);
//           io.emit('activeCustomer', allCustomer);
//       });
//   });

// Express routes
//app.use('/api', require('./Src/router/chatRoutes'));
//app.use('/api', require('./Src/router/paymentRoutes'))
app.use('/api', require('./Src/router/dashbord/dashboardIndexRoutes'));
//app.use('/api/home', require('./Src/router/home/homeRoutes'))


app.use('/api', require('./Src/router/authRouter'));
//app.use('/api', require('./Src/router/home/customerAuthRoutes'));
app.use('/api', require('./Src/router/dashbord/SupervisorRouter'));
app.use('/api', require('./Src/router/dashbord/ShiftRouter'));
app.use('/api', require('./Src/router/dashbord/employeeRouter'))

// Server setup
const port = process.env.PORT || 5000;
dbConnect();

app.listen(port, () => console.log(`Server is running on port ${port}!`));


