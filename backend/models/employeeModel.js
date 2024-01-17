const { Schema, model } = require('mongoose')

const employeeSchema = new Schema({
    employeeId: {
        type: Schema.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
     },
    department: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    salary: {
        type: String,
       required:true 
    },
    date: {
        type: Date.now,
        required: true
    },
    images: {
        type: Array,
        required: true
    }
}, { timestamps: true })


employeeSchema.index({
    name: 'text',
    department:'text',
    designation: 'text'
}, {
    weights: {
        name: 5,
        department: 4
    }
})

module.exports = model('addemployee', employeeSchema)