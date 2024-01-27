const { Schema, model } = require('mongoose')

const supervisorCustomerSchema = new Schema({
    myId: {
        type: String,
        required: true
    },
    myFriends: {
        type: Array,
        default: []
    }

}, { timestamps: true })

module.exports = model('supervisor_customers', supervisorCustomerSchema)