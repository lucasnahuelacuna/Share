const mongoose = require('mongoose')
const PostMessages = require('../models/postMessages')

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessages.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessages(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

    try {
        const updatedPost = await PostMessages.findByIdAndUpdate(_id, { ...post, _id }, { new: true })
        res.json(updatedPost)  
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = {
    getPosts,
    createPost,
    updatePost
}