import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { validate } from '../middlewares/validateMiddleware.js';

import {createUserSchema,updateUserSchema,userIdParamSchema,deleteUserSchema,} from '../Validations/userValidation.js';

const router = express.Router();

// Protect all routes with JWT
router.use(protect);

router.route('/').post(validate(createUserSchema), createUser).get(getUsers);

router.route('/:id').get(validate(userIdParamSchema), getUserById).put(validate(updateUserSchema), updateUser).delete(validate(deleteUserSchema), deleteUser); 

export default router;