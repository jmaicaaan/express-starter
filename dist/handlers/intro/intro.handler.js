'use strict';

var IntroHandler = function IntroHandler() {};

IntroHandler.prototype.intro = function (req, res) {
  res.send('Hello World');
};

module.exports.IntroHandler = IntroHandler;