const { Comment } = require('../models');




const getAllComments = async (req, res) => {
    try {
        const Comments = await Comment.find()
        res.json(Comments)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json({
            comment
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteComment = async (req, res) => {
    try {
        const id = req.params.id
        const userComment = await Comment.findByIdAndDelete(id)
        if (userComment) {
            return res.status(200).send('Comment Deleted')
        }
        throw new Error("Comment not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateComment = async (req, res) => {
    try {
        const id = req.params.id
        const commentUpdate = await Comment.findByIdAndUpdate(id, req.body, { new: true })
        if (commentUpdate) {
            return res.status(200).json(commentUpdate)
        } 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports = {
    getAllComments,
    createComment,
    deleteComment,
    updateComment
}