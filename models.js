'use strict';

exports = module.exports = function(app, mongoose) {
  //then regular docs
  require('./schema/Companies')(app, mongoose);
};
