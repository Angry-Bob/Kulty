const { Schema } = require('mongoose')

const userSchema = new Schema(
    {
        user_name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        created_at: { type: Date, default: Date.now }
    },
    { timestamps: true }
)

module.exports = userSchema