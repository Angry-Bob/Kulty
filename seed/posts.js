const db = require('../db')
const { Post, User } = require('../models')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const users = await User.find()

    const posts = [
        {
            author: users[2]._id,
            title: "It's good.",
            text_content: 'I really like this APP!',
        },
        {
            author: users[1]._id,
            title: "Ehh, I dont know.",
            text_content: "I really wanna like this APP, but it's kind of awful!",

        },
        {
            author: users[0]._id,
            title: "Im old?",
            text_content: 'Im in a nursing home! Can I use this APP?',
        }
    ]

      module.exports = posts;

    await Post.insertMany(posts)
    console.log("added posts")
}
const run = async () => {
    await main()
    db.close()
}

run()