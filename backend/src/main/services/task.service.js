const taskRepository = require('../repositories/task.repository');

const getAllTasks = async () => {
    const tasks = await taskRepository.getAllTasks();
    return tasks;
}

module.exports = {
    getAllTasks,
};