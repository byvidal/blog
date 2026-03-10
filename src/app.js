import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import userRoutes from "./routers/user.routes.js";
import postRoutes from "./routers/post.routes.js"; 

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser()); 

app.use(userRoutes);
app.use(postRoutes); 

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

export default app;