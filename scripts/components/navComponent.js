var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
       	// <!-- Navigation -->
        <div id="navnav" className="navcontainer">
		      <ul className="nav nav-pills" id="navpills">
  				
    				<li role="presentation" id="homenav"><a href="#home">Home</a></li>
    				<li role="presentation" id="findnav"><a href="#findThingsMap">Find things!</a></li>
    				<li role="presentation" id="listnav"><a href="#listThings">List things!</a></li>
    				<li role="presentation" id="aboutnav"><a href="#aboutUs">About us!</a></li>
				
			   </ul>
		    </div> 
      );
    }
});