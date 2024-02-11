const { model, Schema } = require("mongoose");

const DataSchema = Schema(
  {
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    status: {
      type: String,
      default: 'New'
    },
    email: {
      type: String
    
    },
    
    createdDate: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false }
);

const TasksModel = model("alltasks", DataSchema);

module.exports = TasksModel;
