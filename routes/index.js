var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/addNewWord', (req, res, next)=>{
	userWord = req.body.newWord
	res.send(userWord);

	//req.body returns an object that holds the newWord that the user submitted
	//now we want to store this new word in a database
});
module.exports = router;
