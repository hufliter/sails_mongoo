/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');
module.exports = {

  attributes: {
  	username: {
  		type: 'string',
  		unique: true,
      required: true
  	},
    region: {
      type: 'string',
      required: true
    },
    user_token: {
      type: 'string',
      unique: true,
      required: true
    },
    age: {
      type: 'integer',
      required: true
    },
    device_id : {
      type: 'string',
      unique: true
    }
  },

  beforeCreate: function(values, cb){
    bcrypt.hash(values.user_token, 10 , function(err, hash) {
      if( err ) return cb(err);
      values.user_token = hash;
      cb();
    });
  }
};

