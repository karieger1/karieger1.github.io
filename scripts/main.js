var React = require('react');
var Backbone = require('backparse')(require('./config/parse'));
var ListingModel = require("./models/ListingModel");
var ListingCollection = require('./collections/listingCollection');

var containerEl = document.getElementById("container");

var GiverDetail = require("./components/giverdetailcomponent");
var ItemDetail = require("./components/itemdetailcomponent");
var ListSuccess = require("./components/listsuccesscomponent");
var ListThings = require("./components/listThingsComponent");
var FindThingsList = require("./components/findthingslistcomponent");
var FindThingsMap = require("./components/findThingsMapComponent");
var AboutUs = require('./components/aboutUsComponent');
var NavBar = require('./components/navComponent');
var HomePage = require("./components/homepagecomponent");

var listings = new ListingCollection();

listings.fetch();

var listing = new ListingModel();

filepicker.setKey("ANzsBUFgaT0q8UhqRkYmyz");

React.render(<NavBar myApp={myApp} />, 
	document.getElementById("navbar"));


var App = Backbone.Router.extend({

	routes: {
		'': 		       'home',
		'home': 		   'home',
		// 'findThingsMap':   'findThingsMap',
		'itemDetail/:id': 	'itemDetail',
		'findThingsList':  'findThingsList',
		'giverDetail':     'giverDetail',
		'listThings':      'listThings',
		'listSuccess':     'listSuccess',
		'aboutUs': 	       'aboutUs'
	},

	home: function() {
		 React.render(
			<HomePage />,
			containerEl
		 	
		 );
	},
	// findThingsMap: function() {
	// 	console.log('map of things?')
	// 	React.render(
	// 		<FindThingsMap />,
	// 		//document.getElementById("map-canvas")
	// 		containerEl
	// 	);
	
	// },
	findThingsList: function() {
		React.render(
			<FindThingsList listings ={listings}
			myApp={myApp} />,
			containerEl
		);
	},
	itemDetail: function(id) {
		console.log(id)
		React.render(
			<ItemDetail id={id} listings ={listings}
			myApp={myApp} />,
			containerEl
		);
	},
	giverDetail: function() {
		React.render(
			<GiverDetail listings ={listings}
			myApp={myApp} />,
			containerEl
		);
	},
	listThings: function() {
		React.render(
			<ListThings listing ={listing}
			myApp={myApp} />,
			containerEl
		);
	},
	listSuccess: function() {
		React.render(
			<ListSuccess />,
			containerEl
		);
	},
	aboutUs: function() {
		 React.render(
		 	<AboutUs />,
		 	containerEl
		 );
	}
});

var myApp = new App();

Backbone.history.start();