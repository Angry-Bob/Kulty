const { Post, User, Comment } = require('../models');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author')

        res.json(posts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPost = async (req, res) => {
    try {
        const posts = await new Post(req.body)
        await posts.save()
        return res.status(201).json({
            posts
        })
        } catch (e) {
            return res.status(500).send(e.message)
        }
    }
const deletePost = async (req, res) => {
    try {
        const id = req.params.id
        const postDelete = await Post.findByIdAndDelete(id)
        if (postDelete) {
            return res.status(200).send('Post Deleted!')

        }
        throw new Error("User not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updatePost = async (req, res) => {
    try {
        const id = req.params.id
        const postUpdate = await Post.findByIdAndUpdate(id, req.body, { new: true })
        if (postUpdate) {
            return res.status(200).json(postUpdate)
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports = {
    getAllPosts,
    createPost,
    deletePost,
    updatePost
}