import 'dotenv/config';
import app from './app.js';
import connectDB from './config/db.js';

const PORT = process.env.PORT || 5000;

// 1. Database Connect karein
// await connectDB();

// 2. Server Start karein
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

await connectDB();