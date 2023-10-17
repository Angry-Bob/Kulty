const { User } = require('../models');




const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const userDelete = await User.findByIdAndDelete(id)
        if (userDelete) {
            return res.status(200).send('User Deleted')
        }
        throw new Error("User not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const userUpdate = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (userUpdate) {
            return res.status(200).json(userUpdate)
        } 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    updateUser
}