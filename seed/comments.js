const db = require('../db')
const { Comment, Post, User } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const posts = await Post.find()
    const users = await User.find()

    const comments = [
        {
            author: users[0]._id,
            title: "Hate it!",
            text_content: 'This post is terrible',
            post_id: posts[1]._id 
        },
        {
            author: users[1]._id,
            title: "Love it!",
            text_content: 'I like the way you worded this post',
            post_id: posts[2]._id 
        },
        {
            author: users[2]._id,
            title: "No comment!",
            text_content: 'My comment has no meaning, just like my life.',
            post_id: posts[0]._id 
        }
    ]


      module.exports = comments;




    await Comment.insertMany(comments)
    console.log("added comments")
}
const run = async () => {
    await main()
    db.close()
}

run()