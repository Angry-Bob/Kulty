const { Schema } = require('mongoose')


const postSchema = new Schema(
    {
        user_name: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        title: { type: String, required: true },
        text_content: { type: String, required: true },
        created_at: { type: Date, default: Date.now }   
    },
    { timestamps: true }
)

module.exports = postSchema