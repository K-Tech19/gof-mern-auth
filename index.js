require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const methodOverride = require('method-override');


// allows us to use res.json
app.use(express.json())
// allows access from all origins
app.use(cors())
// bodyparser middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}))
// controller middleware

app.use('/api', require('./controllers/users'))
app.use('/blog', require('./controllers/blogs'))
app.use('/game', require('./controllers/Game'))

// app.use('/comments', require('./controllers/comments'))
app.get('/', (req, res)=> {
    res.send('hi this is jeff')
})

app.listen(process.env.PORT || 8000, ()=>{
    console.log('superonics MERN AUTH 8000')
})