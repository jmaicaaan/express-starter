import * as models from '../../../models';

var <%= upCaseName %> = function() {};

<%= upCaseName %>.prototype.test = function(req, res) {
  res.send('Hello World');
}

module.exports.<%= upCaseName %> = <%= upCaseName %>;