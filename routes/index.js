var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config.js');

//created teh connection 

var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
})

//need to actually connect

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/addNewWord', (req, res, next)=>{
	userWord = req.body.newWord
	// res.send(userWord);

	var insertQuery = "INSERT INTO userWords (user_words) VALUES ('"+userWord+"')"; 

	//actually place the insertquery into the page
	connection.query(insertQuery, (error, results, field)=>{
		if (error) throw error;
		res.send('hey there')
	})



	//req.body returns an object that holds the newWord that the user submitted
	//now we want to store this new word in a database
});
module.exports = router;
