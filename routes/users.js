var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello');
  res.status(200).json({
    fullname: 'Chatinun Nuntapasuk'
  })
});

router.get('/bio',function(req, res, next){
  res.status(200).json({
    fullname: 'Chatinun Nuntapasuk',
    nickname: 'Max',
    hobby: 'Sleep',
    gitusername: 'Chatinun'  
  })
})

module.exports = router;
