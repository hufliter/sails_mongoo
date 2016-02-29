/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	registerDevice: function(req,res){
		var device_id = req.body.device_id;
		var device_type = req.body.device_type;

		if( device_type && device_id ) {
			device_id = Libs.generateDeviceToken(device_id);
			var data = {
				device_id: device_id,
				device_type: device_type
			};
			User_device.findOrCreate(data).exec(function(err, result){
				if( err ) return res.json(err);
				if( result ) {
					return res.json(result);
				}
			});
		} else {
			return res.json({"error":1});
		}
	},
	checkUserDevice: function(req,res) {
		var device_id = req.body.device_id;
		if( device_id && (device_id != undefined) ) {
			User_device.checkUserDevice(device_id, function(err, result){
				if( err ) return res.json(err);
				if( result ) {
					return res.json(result);
				} else {
					return res.json({"error":2});
				}
			});
		} else {
			return res.json({'error':"1"});
		}
	},
	testCreateUser: function(req,res) {
		var device_id = req.body.device_id;
		var username = req.body.username;
		var region = req.body.region;
		var age = req.body.age;
		var data = {
			device_id: device_id,
			username: username,
			region: region,
			age: age
		};
		Users.create(data).exec(function(err,result){
			if(err) return res.json(err);
			if( result ) return res.json(result);
		});
	},
	loginUser: function(req,res){
		var username = req.body.username;

		if( username && (username != undefined) ) {
			Users.checkUsername(username, function(err, result){
				if( err ) return res.json(err);
				if( (result) && (result != undefined) ) {
					var sess_token = Libs.generateSessionToken(username);
					var data = {
						user_id: result.id,
						session_token: sess_token,
						expire: 1
					};
					//if exist user_id (maybe update expire time and updatedAt)
					//else create new one
					Users_session.findOrCreate({user_id:result.id}, data).exec(function(err,result){
						if( err ) return res.json(err);
						if( result ) {
							return res.json(result);
						} else {
							return res.json({"error":3});
						}
					});
				} else {
					return res.json({"error":2});
				}
			});
		} else {
			return res.json({"error":1});
		}
	},

	validateSessionToken: function(req,res) {
		var session_token = req.body.session_token;

		if( session_token && (session_token != undefined) ) {
			Users_session.validateUserSession(session_token, function(err, result) {
				if( err ) return res.json(err);
				if( result ) {
					return res.json(result);
				} else {
					return res.json({"error":2});
				}
			});
		} else {
			return res.json({"error":1});
		}
	}
};

