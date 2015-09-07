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
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<a className="btn btn-primary btn-lg" id="button1" href="#listThings" role="button">Get rid of things</a>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<a className="btn btn-primary btn-lg" id="button2" href="#findThingsMap" role="button">Find things</a>
							</div>
						</div>
					</div>
				<p id="tmtgoals">TMT has three main goals: To reduce waste, to help those in need, and to bring out the treasure hunter in all of us!</p>
					
			</div>
			

		);
	}
});