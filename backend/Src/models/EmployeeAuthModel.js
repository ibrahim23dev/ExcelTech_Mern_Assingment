const { Schema, model } = require('mongoose')

const EmployeeAuthModel = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    method: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = model('employee', EmployeeAuthModel)