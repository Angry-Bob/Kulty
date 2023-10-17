const { Post } = require('../models');




const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
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




module.exports = {
    getAllPosts,
    createPost
}