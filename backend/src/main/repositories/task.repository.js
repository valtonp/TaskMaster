const prisma = require('../prisma');

const getAllTasks = async () => {
    return await prisma.task.findMany();
}

module.exports = {
    getAllTasks,
  };