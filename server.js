const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('hello');
});

app.listen(port, ()=>{
    console.log(`서버가 http://localhost:${port}포트에서 실행`)
})