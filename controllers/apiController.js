const Kitty = require('../models/kitty');

exports.index = function(req, res, next) {
   res.json({ 'message': 'index' });
};

exports.kitties = function(req, res, next) {
   Kitty.find()
      .then(kitties => res.json(kitties))
      .catch(next);
}
