const mongoose = require('../db/connection')


const commentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: String
})

const blogPostSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    comments: [commentSchema],
    title: {
        type: String
    },
    content: {
        type: String
    },
    game: {
        type: Number
    },
    email: {
        type: String
    }
})

module.exports = mongoose.model('BlogPost', blogPostSchema)