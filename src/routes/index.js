import express from 'express';
import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', protect, userRoutes);

export default router;