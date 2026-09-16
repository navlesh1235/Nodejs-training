import User from '../models/User.js';
import ApiError from '../utils/apiError.js';
import { generateToken } from '../utils/generateToken.js';

class AuthService {
  async register(userData) {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new ApiError(400, 'Email is already registered');
    }

    const user = await User.create(userData);
    const token = generateToken(user._id);

    return {
      user: { _id: user._id, name: user.name, email: user.email, phoneNumber: user.phoneNumber },
      // token,
    };
  }

  async login(email, password) {
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.matchPassword(password))) {
      throw new ApiError(401, 'Invalid email or password');
    }

    const token = generateToken(user._id);

    return {
      user: { _id: user._id, name: user.name, email: user.email, phoneNumber: user.phoneNumber },
      token,
    };
  }
}

export default new AuthService();