var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="listSuccess">
				<h3>Great success!</h3>
				<p> 
				Your item is now listed on the TakeMyThings! website. <br/>
				You should receive an email within the next few minutes that allows
				you to delete your posting once your item has been picked up.
				Remember, it is your responsibility to do so!<br/>
				Thanks so much for using TakeMyThings! You've done your good deed for 
				the day. Carry on!
				</p>
			</div>
		);
	}
});