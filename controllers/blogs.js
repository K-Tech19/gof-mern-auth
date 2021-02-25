const express = require('express')
const router = express.Router()
const Blog = require('../models/BlogPost')
const methodOverride = require('method-override');
const { requireToken } = require('../middleware/auth')


router.post('/createblog', (req, res)=>{ // create blog form
    console.log('route hit')
    Blog.create({
        author: req.body.author,
        title: req.body.title,
        content: req.body.content
    })
    .then(user => {
        res.status(201).json(user)
        res.redirect('/')
        console.log(user)
    })
    .catch(err=>{
        console.log('this is an error', err)
    })
})

router.get('/seeblogs/:id', 
async (req,res)=> {
    console.log('route hit')
    console.log(req.params.id)
    await Blog.findOne({
        author: req.params.id
    })
    .then((blogs)=> {
        console.log(blogs)
        res.send(blogs)
    })
    .catch(err=>{
        console.log(`this is error ${err}`)
    })
})


router.put('/updateblog/:id', async (req, res) => { // create update form
    console.log('this route is getting hit')
    await Blog.findByIdAndUpdate('6034000b84834f56c60b19d3', req.body, {new:true})
    .then(response =>{
        console.log(response)
    })
    .catch(err =>{
        console.log(`this is an error ${err}`)
    })
})


router.post('/createcomment', async(req, res)=>{ // create comment form

    console.log('route hit')
    await Blog.findById('6034000b84834f56c60b19d3')// req.params.id
    .then(foundBlog => {
        console.log(foundBlog)
        console.log(req)
        console.log(req.body.comment)
        foundBlog.comments.push({author: req.body.author , comment:req.body.comment })
        foundBlog.save()
        res.status(201).json(foundBlog)
    })
    .catch(err=>{
        console.log('this is an error', err)
    })
})

router.delete('/deleteblog/:id', async (req, res) => { // connect to delete button
    await Blog.findByIdAndDelete('603402d04c0e525730af4678')
    .then(comment => {
        console.log(comment)
    })
    .catch(err => {
        console.log(`error message ${err}`)
    })
})

module.exports = router
