const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const memosRouter = require('./routes/memos')

//app.use('/',indexRouter)
app.use('/users',usersRouter)
app.use('/',memosRouter)

app.listen(port, ()=>{
    console.log(`서버가 http://localhost:${port}포트에서 실행`)
})