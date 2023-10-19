const { Schema } = require('mongoose')

const commentSchema = new Schema(
    {
        author: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        title: { type: String, required: true },
        text_content: { type: String, required: true },
        post_id: { type: Schema.Types.ObjectId, ref: 'posts', required: true } 
    },
    { timestamps: true }
)

module.exports = commentSchema