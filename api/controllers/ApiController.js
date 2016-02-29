/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getLeaderboardData: function(req,res) {
		var region = req.param('region')?req.param('region'):' ';
		var limit = req.param('limit')?req.param('limit'):'';
		var age = req.param('age')?req.param('age'):'';

		
	}
};

