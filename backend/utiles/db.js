const mongoose = require('mongoose');

module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { 

         })
        console.log("database connect....")
    } catch (error) {
        console.log(error.message)
    }
}