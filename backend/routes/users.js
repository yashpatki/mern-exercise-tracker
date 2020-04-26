const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;



// const router = require('express').Router();
// let User = require('../models/user.model');

// //first endpoint that handles incoming HTTP GET requests on /users/URL path
// router.route('/').get((req, res) =>{
// 	User.find() 			//gets list of all users from Database. find returns a promise
// 		.then(users => res.json(users)) //results returned from database in json format
// 		.catch(err => res.status(400).json('Error: ' + err));
// });

// //second endpoint that handles incoming HTTP POST requests on /users/add/URL path
// router.route('/add').post((req,res) =>{
// 	const username = req.body.username;		//new username is part of request body

// 	const newUser = new User({username}); //creating new instance of user after getting the username

// //the new user is saved to the database and we return user added 
// 	newUser.save()
// 			.then(() => res.json('User added!'))
// 			.catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;