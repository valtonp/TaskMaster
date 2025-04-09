const userRepository = require('../repositories/user.repository');

const getAllUsers = async () => {
  const users = await userRepository.getAllUsers();
  return users;
};

const createUser = async (user) => {
  const newUser = await userRepository.createUser(user);
  return newUser;
}

module.exports = {
  createUser,
  getAllUsers,
};
