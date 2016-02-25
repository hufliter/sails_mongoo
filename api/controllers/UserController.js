/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getUser: function(req,res) {
		User.find({}).exec(function(err,result){
			if( err ) {
				return res.json(err);
			} else {
				return res.json(result);
			}
		});
	},
	registerUser: function(req,res) {
		var username = req.body.username;
		var email = req.body.email;
		var region = req.body.region;
		var age = req.body.age;
		var user_token = Date.now();
		var data = {
			username: username,
			region: region,
			email: email,
			age: age,
			user_token: user_token
		}
		User.create(data).exec(function(err, result){
			if( err ) {
				return res.json(err);
			} else {
				return res.json(result);
			}
		});
	}
};

