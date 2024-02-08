const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
     },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'New'
    },
    createdDate:{type:Date,default:Date.now()}
},
 { timestamps: true })


module.exports = model('task', taskSchema)