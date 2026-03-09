import Post from '../models/post.model.js';

export const createPost = async (req, res) => {
    try {
        const { title, description, type } = req.body;
        const newPost = new Post({
            title,
            description,
            type,
            user:req.user.id
        });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({message: "Error al crear post", error: error.message});
    }
};

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({ user: req.user.id}).populate('user');
        res.json(posts);
    } catch (error) {
        res.status(500).json({message: "Error al obtener posts", error: error.message});
    }
};

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if(!post) return res.status(404).json({message: 'Post no encontrado'});
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({message: "Error al eliminar post", error: error.message});
    }
};

export const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!post) return res.status(404).json({ message:'Post no encontrado'});
        res.json(post);
    } catch (error) {
        res.status(500).json({message: "Error al actualizar post", error: error.message});
    }
};