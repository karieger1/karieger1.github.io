var Backbone = require("backbone");
Backbone.$ = require("jquery");
var ListingModel = require('../models/listingModel');

module.exports = Backbone.Collection.extend({
    model: ListingModel,
    parseClassName: 'listing',
});