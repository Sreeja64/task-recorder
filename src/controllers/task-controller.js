const task = require('../models/task');
const ObjectId = require("mongodb").ObjectId;

const fetchAllTasks = async function (req, res) {
    const tasks = await task.find();
    res.send(tasks);
  }

const fetchActiveTasks = async function (req, res) {
    const activeTasks = await task.aggregate([{ $match: { status: true } }]);
    res.send(activeTasks);
  }

const addTask = async function (req, res) {
    const addedTask = await task.create({ ...req.body });
    res.send(addedTask);
  }

const toggleStatus  =  async function (req, res) {
    const {_doc:{status}} = await task.findOne({ _id: ObjectId(req.params.id) });
    const updatedTask = await task.findOneAndUpdate({_id: ObjectId(req.params.id)},{ status: !status },{new: true});
    res.send(updatedTask);
  } 

  const deleteTask  =  async function (req, res) {
    const deletedTask = await task.deleteOne({_id: ObjectId(req.params.id)});
    res.send(deletedTask);
  }

module.exports = {
    fetchAllTasks,
    fetchActiveTasks,
    addTask,
    toggleStatus,
    deleteTask,
}