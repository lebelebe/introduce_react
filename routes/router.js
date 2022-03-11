var express = require('express')
var router = express.Router();

router.get('/', function(req, res){
    res.send('뭔가 보여줘');
});
router.get('/myport', function(req, res){
    res.send('제발 보여줘');
});




module.exports = router;