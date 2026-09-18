// import express from 'express';
// import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
// import { validate } from '../middlewares/validateMiddleware.js';
// import { protect } from '../middlewares/authMiddleware.js';

// import {createUserSchema,updateUserSchema,userIdParamSchema,deleteUserSchema,} from '../Validations/userValidation.js';

// const router = express.Router();

// // createUser -> Create new user
// // router.route('/').post(validate(createUserSchema), createUser).get(getUsers);  // get.getUsers->Get all user with filter

// // router.route('/:id').get(validate(userIdParamSchema), getUserById).put(validate(updateUserSchema), updateUser).delete(validate(deleteUserSchema), deleteUser); 


// router.route('/')
//   .post(protect, validate(createUserSchema), createUser)
//   .get(protect, getUsers);

// router.route('/:id').get(protect, validate(userIdParamSchema), getUserById)
//   .put(protect, validate(updateUserSchema), updateUser)
//   .delete(protect, validate(userIdParamSchema), deleteUser);

// export default router;



import express from 'express';

import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';

import { validate } from '../middlewares/validateMiddleware.js';

import { protect } from '../middlewares/authMiddleware.js'; // 👈 yaha add kiya

import {
  createUserSchema,
  updateUserSchema,
  userIdParamSchema,
  deleteUserSchema,
} from '../Validations/userValidation.js';

const router = express.Router();

// Collection routes
router.route('/')
  .post(protect, validate(createUserSchema), createUser)
  .get(protect, getUsers);

// Single user routes
router.route('/:id')
  .get(protect, validate(userIdParamSchema), getUserById)
  .put(protect, validate(updateUserSchema), updateUser)
  .delete(protect, validate(userIdParamSchema), deleteUser);

export default router;