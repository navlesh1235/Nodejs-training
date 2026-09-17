import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import { validate } from '../middlewares/validateMiddleware.js';

import {createUserSchema,updateUserSchema,userIdParamSchema,deleteUserSchema,} from '../Validations/userValidation.js';

const router = express.Router();

// createUser -> Create new user
router.route('/').post(validate(createUserSchema), createUser).get(getUsers);  // get.getUsers->Get all user with filter

router.route('/:id').get(validate(userIdParamSchema), getUserById).put(validate(updateUserSchema), updateUser).delete(validate(deleteUserSchema), deleteUser); 

export default router;

