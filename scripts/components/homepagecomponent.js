var React = require('react');

module.exports = React.createClass ({
	render: function () {
		return (
			<div className="mainheading" id="heading" styles="background:transparent !important">
		    	
					<strong><center><h1 id="logo">Take My Things!</h1></center></strong>

					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
					  			<p id="tmt">TakeMyThings! exists to connect people who want to get rid of things to people who need (or want!) those things.</p>
					  		</div>
					  	</div>
					</div>

					  <center><p><a className="btn btn-primary btn-lg" id="button1" href="#listThings" role="button">Get rid of things</a></p></center>
					  <center><p><a className="btn btn-primary btn-lg" id="button2" href="#findThingsMap" role="button">Find things</a></p></center>
				<div className="goalscircle">
					<div id="goalsHeading">TMT's goals are threefold:</div>
						<div className="goals">	
							<div id="goal1">Reduce<br/> waste</div>
							<div id="goal2">Help <br/> others</div>
							<div id ="goal3"> Have <br/> fun</div>
						</div>
					
				</div>
			</div>

		);
	}
});