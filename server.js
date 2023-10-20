const express = require('express');
const db = require('./db');
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const methodOverride = require('method-override')

const PORT = process.env.PORT || 3001;

const usersController = require('./controllers/usersController');
const postsController = require('./controllers/postsController');
const commentsController = require('./controllers/commentsController');

app.use(methodOverride('_method'))
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.urlencoded( { extended: true}))

app.get('/users', usersController.getAllUsers)
app.post('/users', usersController.createUser)
app.delete('/users/:id', usersController.deleteUser)
app.put('/users/:id', usersController.updateUser)

app.get('/posts', postsController.getAllPosts)
app.post('/posts', postsController.createPost)
app.delete('/posts/:id', postsController.deletePost)
app.put('/posts/:id', postsController.updatePost)

app.get('/comments', commentsController.getAllComments)
app.post('/comments', commentsController.createComment)
app.delete('/comments/:id', commentsController.deleteComment)
app.put('/comments/:id', commentsController.updateComment)

app.get('/comments', commentsController.getAllComments)
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))