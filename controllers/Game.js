const express = require('express')
const router = express.Router()
const Game = require('../models/Game')
const methodOverride = require('method-override');
// const { requireToken } = require('../middleware/auth')

router.post('/addgame', (req, res)=>{
    console.log('route hit')
    Game.create({
        owner: req.body.owner,
        title: req.body.title,
        genre: req.body.genre
    })
    .then(gameInfo =>{
        res.send(201)
    })
    .catch(err=>{
        console.log('this is an error', err)
    })
})

module.exports = router