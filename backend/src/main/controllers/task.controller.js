const taskService = require("../services/task.service");

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTasks,
};