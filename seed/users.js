const db = require('../db')
const { User, Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const posts = await Post.find()

    const users = [
        { 
            user_name: "rcastor0001",
            email: "rcastor0000@gmail.com",
            password: "1234",
        },
        {
            user_name: "rcastor0002",
            email: "rcastor1111@gmail.com",
            password: "4321"
        },
        {
            user_name: "rcastor0003",
            email: "rcastor2222@gmail.com",
            password: "000"
        }
    ]


      module.exports = users;




    await User.insertMany(users)
    console.log("added users")
}
const run = async () => {
    await main()
    db.close()
}

run()