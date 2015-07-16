var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="container">
  				<div className="row">
  					<div id="itemdetail" className="col-xs-12 col-s-12 col-md-8 col-md-offset-4 col-lg-8 col-lg-offset-4">
  						<p>Item description
  						Pic
  						Distance from user
  						Condition
  						listedAt</p>
  						<button id="giverinfo">Get giver info</button>

  					</div>
  				</div>
			</div>
		);
	}
});