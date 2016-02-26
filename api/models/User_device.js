/**
* User_device.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	device_id: {
  		type: 'string',
  		unique: true,
  		primaryKey: true
  	},
  	device_type: {
  		type: 'string'
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
	//Add a reference to Users
  	users: {
  		  collection: 'users',
  		  via: 'device_id'
  	},

  },
  	checkUserDevice: function(device_id, next){
  		User_device.find({device_id:device_id})
  			.populate('users')
  			.exec(function(err,result){
  				if(err) return next(null, err);
  				if(result) return next(null,result);
			});
  	},
};

