const { Schema, model } = require('mongoose')

const supervisorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
}, { timestamps: true })

supervisorSchema.index({
    name: 'text'
})

module.exports = model('supervisor', supervisorSchema);