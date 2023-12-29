const { Schema, model } = require('mongoose');

const ShiftModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// shiftSchema.index({
//   name: 'text',
// });


module.exports = model('shift', ShiftModel);
