const { Schema } = require('mongoose')


const postSchema = new Schema(
    {
        author: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        title: { type: String, required: true },
        text_content: { type: String, required: true },
        created_at: { type: Date, default: Date.now }   
    },
    { timestamps: true }
)

module.exports = postSchema