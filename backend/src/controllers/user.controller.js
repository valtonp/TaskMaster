const { serializeUsers, serializeUser } = require('../serializers/user.serializer');
const userService = require('../services/user.service');
const { createUserSchema, updateUserSchema } = require('../validators/user.validator');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(serializeUsers(users));
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    createUserSchema.parse(req.body);
    const user = await userService.createUser(req.body);
    res.status(201).json(serializeUser(user));

  }catch (error){
    next(error)
  }
}

module.exports = {
  getAllUsers,
  createUser,
};
