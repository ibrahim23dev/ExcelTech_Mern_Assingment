const mongoose = require('mongoose')

const AddEmployeeModel = mongoose.Schema({
    sellerId: {
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
        required: true
    },
    shift: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    date: {
        type: Date.now(),
        required: true
    },

    shopName: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    
}, { timestamps: true })

// EmployeeSchema.index({
//     name: 'text',
//     shift: 'text',
//     email: 'text',
//     date: 'text'
// }, {
//     weights: {
//         name: 5,
//         shift: 4,
//         email: 3,
//         date: 2
//     }
//})

module.exports = mongoose.Model('AddEmployee', AddEmployeeModel);