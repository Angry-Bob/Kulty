const mongoose = require('mongoose')
const userSchema = require('./user')
const postSchema = require('./post')
const commentSchema = require('./comment')

const User = mongoose.model('users', userSchema)
const Post = mongoose.model('posts', postSchema)
const Comment = mongoose.model('comments', commentSchema)

module.exports = {
    User,
    Post,
    Comment
  }