var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
       	// <!-- Navigation -->
        <div className="navcontainer">
		    <ul className="nav nav-pills" id="navpills">
  				
  				<li role="presentation"><a href="#home">Home</a></li>
  				<li role="presentation"><a href="#findThingsMap">Find things!</a></li>
  				<li role="presentation"><a href="#listThings">List things!</a></li>
  				<li role="presentation"><a href="#aboutUs">About us!</a></li>
				
			</ul>
		</div> 
        );
    }
});