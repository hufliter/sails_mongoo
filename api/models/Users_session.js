/**
* Users_session.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	user_id: {
  		type: 'string',
      model: 'users'
  	},
  	session_token: {
  		type: 'string',
  		unique: true
  	},
  	expire: {
  		type: 'datetime',
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
	  }
  }
};

