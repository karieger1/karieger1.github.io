var Backbone = require('backparse')(require('../config/parse'));
var ListingModel = require('../models/ListingModel');

module.exports = Backbone.Collection.extend({
    model: ListingModel,
    parseClassName: 'listing',
});