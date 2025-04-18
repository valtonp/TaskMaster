const prisma = require('../prisma');

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const createUser = async (user) => {
  return await prisma.user.create({ data: user });
}

module.exports = {
  getAllUsers,
  createUser,
};
