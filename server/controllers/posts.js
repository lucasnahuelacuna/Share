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

const deletePost = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    try {
        await PostMessages.findByIdAndRemove(id)
        res.json({ message: 'Post deleted successfully' })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const likePost = async (req, res) => {
    const { id } = req.params

    if(!req.userId) return res.json({ message: 'Unauthenticated'})

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    try {
        const post = await PostMessages.findById(id)
        const index = post.likes.findIndex(id => id === String(req.userId))

        if(index === -1) {
            //like the post
            post.likes.push(req.userId)
        } else {
            //dislike a post
            post.likes = post.likes.filter(id => id !== String(req.userId))
        }

        const updatedPost = await PostMessages.findByIdAndUpdate(id, post, { new: true })

        res.json(updatedPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
}