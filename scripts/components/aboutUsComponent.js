var React = require('react');

module.exports = React.createClass ({
	render: function () {
		return (
			<div className="aboutUsSection">
				<div className="container">
					<div className="row">

					 	<center><strong><h1 id="aboutme">About Us (or mainly me)</h1></strong></center>

							<p>I wish I had a cool story for how TakeMyThings! came to be. But alas, the thought of creating a networking application
							that makes peoples' lives just a bit easier and more meaningful is something that just randomly occurred to me one evening (after 
							a few drinks, most likely). It is the culmination of principles I learned from my parents, and 
							opportunities I saw for myself.</p>

							<p>Ever since I was a wee child, my father was employed by, then subsequently owned and operated waste management (trash) companies. I grew up conscious of the overabundance of trash that our population
							produced. Things like recycling, composting, and re-using were not socio-political concepts in our 
							household -- they were simply pragmatic ways of living. My mother brought her own tupperware
							to restaurants for her leftovers -- not because she was a styrofoam-hating hippie, but because it just
							made more sense. There was no talk of global warming or environmental science in our household -- there was
							just an underlying consciousness of the wastefulness that our species is prone to.</p>
					</div>
				</div>
				<div className="container">
					<div className="row"><center><h3 className="aboutUsheadings">Who created this amazing piece of technology?!</h3></center>
						<div className="col-md-4 col-lg-4">
							<img id="mePic" src="./images/kristentaco1.gif" />
						</div>
						<div className="col-md-8 col-lg-8">
							<p className="meAbout"> Hey! I'm Kristen. Born and bred Austinite. Recovering academic. I received my master's degree 
							from Cambridge, then went on to UT Austin to pursue a PhD in the History of Science. A couple of 
							years in, I decided this whole academic schtick was not for me. I wanted to do something
							more relevant. Which leads me to where I am now -- a front-end development student at the 
							Iron Yard in Austin, TX. It's been quite a ride!</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
});