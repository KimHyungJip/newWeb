express = require('express')

const router = express.Router();

const memos = [];

router.get('/', (req, res) => {
    res.render('index', { memos });
});

router.post('/add',(req,res)=>{
    const { memo } = req.body;
    memos.push(memo)
    res.redirect('/')

})

module.exports = router