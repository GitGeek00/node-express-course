const Task = require('../models/Task')
var ObjectId = require('mongoose').Types.ObjectId;


const allTasks = async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
}

const newTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ "Message": 'Succeeded', "data": task })
}

const getTask = async (req, res) => {
    const id = new ObjectId(req.params.id)
    const task = await Task.find({ _id: id }).exec()
    if (!task) {
        return res.status(404).json({ "message": `No task associated with id: ${id}` })
    }
    res.status(200).send({ task })
}

const updateTask = async (req, res) => {
    const id = new ObjectId(req.params.id)
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!task) {
        return res.status(404).json({ "message": `No task associated with id: ${id}` })
    }
    res.status(200).send({ task })
}

const deleteTask = async (req, res) => {
    const id = new ObjectId(req.params.id)
    const task = await Task.findOneAndDelete({ _id: id })
    console.log(task);
    
    if (!task) {
        return res.status(404).json({"message": `No task associated with id: ${id}`})
    }
    res.status(200).json({ "message": `Succeeded delete task associated with id: ${id}`, "Deleted Task": task })
}

module.exports = { newTask, allTasks, getTask, updateTask, deleteTask }