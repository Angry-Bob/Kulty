const express = require('express');
const db = require('./db');
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express();


const PORT = process.env.PORT || 3001;


const usersController = require('./controllers/usersController');
const postsController = require('./controllers/postsController');
const commentsController = require('./controllers/commentsController');





app.use(logger('dev'))
app.use(bodyParser.json())




app.post('/users', usersController.createUser)
app.delete('/users/:id', usersController.deleteUser)
app.put('/users/:id', usersController.updateUser)




app.get('/users', usersController.getAllUsers)
app.get('/posts', postsController.getAllPosts)
app.get('/comments', commentsController.getAllComments)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))