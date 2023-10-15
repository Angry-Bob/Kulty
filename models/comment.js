const { Schema } = require('mongoose')

const commentSchema = new Schema(
    {
        user_name: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        title: { type: String, required: true },
        text_content: { type: String, required: true },
        post_id: { type: Schema.Types.ObjectId, ref: 'Post', required: true } 
    },
    { timestamps: true }
)

module.exports = commentSchema