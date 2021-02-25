const mongoose = require('../db/connection')

const gameSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    genre: String

})

module.exports = mongoose.model('Game', gameSchema)