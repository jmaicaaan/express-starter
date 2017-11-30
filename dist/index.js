'use strict';

var _app = require('./app.js');

var _app2 = _interopRequireDefault(_app);

var _models = require('../models');

var models = _interopRequireWildcard(_models);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
_app2.default.set('port', port);

models.sequelize.sync().then(function () {
  _app2.default.listen(port, function () {
    return console.log('App is listening on port ' + port);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2RlbHMiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJzZXQiLCJzZXF1ZWxpemUiLCJzeW5jIiwidGhlbiIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7SUFBWUEsTTs7Ozs7O0FBRVosSUFBTUMsT0FBT0MsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDO0FBQ0EsY0FBSUMsR0FBSixDQUFRLE1BQVIsRUFBZ0JKLElBQWhCOztBQUVBRCxPQUFPTSxTQUFQLENBQWlCQyxJQUFqQixHQUF3QkMsSUFBeEIsQ0FBNkIsWUFBTTtBQUNqQyxnQkFBSUMsTUFBSixDQUFXUixJQUFYLEVBQWlCO0FBQUEsV0FBTVMsUUFBUUMsR0FBUiwrQkFBd0NWLElBQXhDLENBQU47QUFBQSxHQUFqQjtBQUNELENBRkQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gJy4vYXBwLmpzJztcclxuaW1wb3J0ICogYXMgbW9kZWxzIGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XHJcblxyXG5tb2RlbHMuc2VxdWVsaXplLnN5bmMoKS50aGVuKCgpID0+IHtcclxuICBhcHAubGlzdGVuKHBvcnQsICgpID0+IGNvbnNvbGUubG9nKGBBcHAgaXMgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApKTtcclxufSk7Il19