const User = require('../models/user')
const Dog = require('../models/dog')


module.exports = {
    index: async (req, res, next) => {
        const users = await User.find({})
        res.status(200).json(users)
    },
    newUser: async (req, res, next) => {
        const newUser = new User(req.body)
        const user = await newUser.save()
        res.status(200).json(user)
    },
    getUser: async (req, res, next) => {
        const { userId } = req.params
        const user = await User.findById(userId)
        res.status(200).json(user)
    },
    replaceUser: async (req, res, next) => {
        const { userId } = req.params
        const newUser = req.body
        const oldUser = await User.findByIdAndUpdate(userId, newUser)
        res.status(200).json({ success: true })
    },
    updateUser: async (req, res, next) => {
        const { userId } = req.params
        const newUser = req.body
        const oldUser = await User.findByIdAndUpdate(userId, newUser)
        res.status(200).json({ success: true })
    },
    deleteUser: async (req, res, next) => {
        const { userId } = req.params
        await User.findByIdAndRemove(userId)
        res.status(200).json({ success: true })
    },
    getUserDogs: async (req, res, next) => {
        const { userId } = req.params
        const user = await User.findById(userId).populate('dogs')
        res.status(200).json(user)
    },
    newUserDog: async (req, res, next) => {
        const { userId } = req.params
        const newDog = new Dog(req.body)
        const user = await User.findById(userId)
        newDog.trainer = user
        await newDog.save()
        user.dogs.push(newDog)
        await user.save()
        res.status(200).json(newDog)
    }
}