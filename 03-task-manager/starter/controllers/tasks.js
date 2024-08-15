const Task = require('../models/Task')
const asyncWrapper = require('../middleware/asyncWrapper')
const { createCustomError } = require('../errors/customError')
var ObjectId = require('mongoose').Types.ObjectId;


const allTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

const newTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res, next) => {
    const id = new ObjectId(req.params.id)
    const task = await Task.findById(id).exec();
    if (!task) {
        return next(createCustomError(`No task associated with id: ${id}`, 404))
    }
    res.status(200).send({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const id = new ObjectId(req.params.id)

    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!task) {
        return next(createCustomError(`No task associated with id: ${id}`, 404))
    }
    res.status(200).send({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const id = new ObjectId(req.params.id)
    const task = await Task.findOneAndDelete({ _id: id })

    if (!task) {
        return next(createCustomError(`No task associated with id: ${id}`, 404))
    }
    res.status(200).json({ "message": `Succeeded delete task associated with id: ${id}`, "Deleted Task": task })
})

module.exports = { newTask, allTasks, getTask, updateTask, deleteTask }