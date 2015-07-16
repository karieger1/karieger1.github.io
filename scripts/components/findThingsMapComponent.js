
var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			map: null
		}
	},
	componentDidMount: function() {
		google.maps.event.addDomListener(window, 'load', this.createMap);
	},
	render: function() {
		var style = {
			width: '100%',
			height: '15em'
		};
		return (
			<div className="googlemap">
				<center>
				<div ref="map" style={style}>hello</div>
				<div ref="street" style={style}>hello</div>
				<button type="button" onClick={this.recenterMap}>
					Re-center map
				</button>
				<button type="button" onClick={this.addMarker}>
					Add marker
				</button>
				<button type="button" onClick={this.streetView}>
					Street view
				</button><br/>
					<a className="btn btn-default" id="listbutton" href="#findThingsList" role="button">List view</a>
				</center>
			</div>
		);
	},
	createMap: function() {
		var mapOptions = {
			center: { lat: 30.3077609, lng: -97.7534014},
			zoom: 8
		};
		var map = new google.maps.Map(
			this.refs.map.getDOMNode(),
			mapOptions
		);

		this.setState({map: map});

	}

	/*recenterMap: function() {
		console.log('recenterMap');

		var latLng = new google.maps.LatLng(
			30.3077609,
			-97.7534014
		);

		this.state.map.panTo(latLng);
		// this.state.map.setZoom(17);
	},

	addMarker: function() {
		var myLatlng = new google.maps.LatLng(-34.397, 150.644);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: this.state.map,
			title: 'Hello World!'
		});
		var contentString = '<h3>hello world!</h3>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		var self = this;
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(self.state.map, marker);
		});
	},
	streetView: function() {
		var panoramaOptions = {
			position: new google.maps.LatLng(30.2268055, -97.7585088),
			pov: {
				heading: 34,
				pitch: 10
			}
		};
		var panorama = new google.maps.StreetViewPanorama(
			this.refs.street.getDOMNode(),
			panoramaOptions
		);
  		this.state.map.setStreetView(panorama);
	}*/
});