const { Schema, model } = require('mongoose')

const supervisorSchema = new Schema({
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
    role: {
        type: String,
        default: 'supervisor'
    },
    status: {
        type: String,
        default: 'pending'
    },
    payment: {
        type: String,
        default: 'inactive'
    },
    method: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ''
    }
}, { timestamps: true })


supervisorSchema.index({
    name: 'text',
    email: 'text'
}, {
    weights: {
        name: 5,
        email: 4,
    }
})

const superviserModel=model('supervisor',supervisorSchema)
module.exports = superviserModel;