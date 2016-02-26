var crypto = require('crypto');
module.exports = {
	generateDeviceToken:function(device_id){
        var result = crypto.createHash('md5').update(device_id).digest("hex");
        return result;
    },
    generateSessionToken: function(username) {
    	var now = new Date();
    	var result = crypto.createHash('md5').update(now.getTime() + username).digest("hex");
    	return result;
    }
};