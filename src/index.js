const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const { ObjectId } = require('mongodb');
const req = require('express/lib/request');
const bcrypt = require('bcryptjs');

const app = express();
const port = process.env.PORT || 3000;


// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send();
// });

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled');
//     }
//     else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log('Server is up on port ' + port);
});