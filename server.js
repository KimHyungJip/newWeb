const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

app.use('/',indexRouter)
app.use('/users',usersRouter)

app.listen(port, ()=>{
    console.log(`서버가 http://localhost:${port}포트에서 실행`)
})