/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
	device_id: {
		type: 'string',
		model: 'user_device',
		required: true
	},
	username : {
		type: 'string',
		unique: true,
		required: true
	},
	region: {
		type: 'string',
		required: true
	},
	age: {
		type: 'integer'
	},
	createdAt: {
	    type: 'datetime',
	    defaultsTo: function (){ return new Date(); },
	    columnName: 'created_at'
	 },
	updatedAt: {
	    type: 'datetime',
	    defaultsTo: function (){ return new Date(); },
	     columnName: 'updated_at'
	},
	//Add a reference to Users_session
  	users_session: {
	  	collection: 'users_session',
	  	via: 'user_id'
  	},
  },

  	checkUsername: function(userName, next) {
  		Users.findOne({username: userName}).exec(function(err, result){
  			if( err ) return next(null, err);
  			if( result ) {
  				return next(null, result);
  			} else {
  				return next(null);
  			}
  		});
  	}
};

