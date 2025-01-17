const express = require('express');
const {
  getUserValidator,
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
} = require('../utils/validators/userValidator');

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  changeUserPassword,
} = require('../services/userService');

const router = express.Router();

router.put(
  '/changePassword/:id',
  changeUserPassword
);
router
  .route('/')
  .get(getUsers)
  .post(createUserValidator, createUser);
router
  .route('/:id')
  .get(getUserValidator, getUser)
  .put(updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);



module.exports = router;