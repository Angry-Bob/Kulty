const { Comment } = require('../models');




const getAllComments = async (req, res) => {
    try {
        const Comments = await Comment.find()
        res.json(Comments)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}




module.exports = {
    getAllComments
}