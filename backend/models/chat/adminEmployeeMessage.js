const { Schema, model } = require('mongoose')

const adminEmployeeMessageSchema = new Schema({
    senderName: {
        type: String,
        required: true
    },
    senderId: {
        type: String,
        default: ''
    },
    receverId: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'unseen'
    }

}, { timestamps: true })

module.exports = model('employee_admin_messages', adminEmployeeMessageSchema);