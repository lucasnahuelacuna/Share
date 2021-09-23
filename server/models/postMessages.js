const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        deafault: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

module.exports = PostMessage