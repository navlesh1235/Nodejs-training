import User from '../models/User.js';
import ApiError from '../utils/apiError.js';

class UserService {
  async createUser(userData) {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new ApiError(400, 'Email is already in use');
    }
    return await User.create(userData);
  }

  async getAllUsers(filters) {
    const query = {};
    if (filters.email) query.email = { $regex: filters.email, $options: 'i' };
    if (filters.phoneNumber) query.phoneNumber = { $regex: filters.phoneNumber, $options: 'i' };
    if (filters.name) query.name = { $regex: filters.name, $options: 'i' };

    return await User.find(query).select('-password');
  }

  async getUserById(id) {
    const user = await User.findById(id).select('-password');
    if (!user) {
      throw new ApiError(404, 'User not found');
    }
    return user;
  }

  async updateUser(id, updateData) {
    const user = await User.findById(id);
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    Object.assign(user, updateData);
    return await user.save();
  }

  async deleteUser(id) {
    const user = await User.findById(id);
    if (!user) {
      throw new ApiError(404, 'User not found');
    }
    await user.deleteOne();
    return { message: 'User deleted successfully' };
  }
}

export default new UserService();