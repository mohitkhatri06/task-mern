import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
   cors({
      origin: [
         'https://task-mern-7a5k.vercel.app/',
         'https://task-mern.vercel.app/',
         'https://task-mern-wipx.onrender.com',
      ],
   })
);

app.use(`/api/users`, userRoutes);

// if (process.env.NODE_ENV === 'production') {
//    const __dirname = path.resolve();
//    app.use(express.static(path.join(__dirname, 'frontend/dist')));

//    app.get('*', (req, res) =>
//       res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
//    );
// } else {
//    app.get('/', (req, res) => res.send('Server is ready'));
// }

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
