import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { createPost, getPosts, deletePost, updatePost } from '../controllers/post.controller.js'; 

const router = Router();

router.post('/posts', authRequired, createPost); 
router.get('/posts', authRequired, getPosts); 
router.delete('/posts/:id', authRequired, deletePost);
router.put('/posts/:id', authRequired, updatePost);

export default router;