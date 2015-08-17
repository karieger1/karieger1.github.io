var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="successfullisting">
				<div className="container" id="listsuccess">
					<center><h3>Great success!</h3></center>
					<div className="row">
						<div className="col-xs-12 col-s-10 col-s-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
							<p>
							Your item is now listed on the TakeMyThings website! <br/>
							</p>
							<p>
							You should receive an email within the next few minutes that allows
							you to delete your posting once your item has been picked up.
							Remember, it is your responsibility to do so!<br/>
							</p>
							<p>
							Thanks so much for using TakeMyThings! You've done your good deed for 
							the day. Carry on!
							</p>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
});