const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        default: 'user'
    },
   
    method: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ''
    },
    subjectInfo: {
        type: Object,
        default: {}
    },
}, { timestamps: true }, { versionKey: false });


userSchema.index({
    name: 'text',
    email: 'text'
}, {
    weights: {
        name: 5,
        email: 4,
    }
})

module.exports = model('user', userSchema)