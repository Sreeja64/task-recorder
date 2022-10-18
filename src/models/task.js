const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: { type: String },
  status: { type: Boolean },
});

const task = mongoose.model("task", taskSchema);

module.exports = task;