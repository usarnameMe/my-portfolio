import app from './app';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
