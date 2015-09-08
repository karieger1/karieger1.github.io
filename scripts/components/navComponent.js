var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
		
			<nav className="navbar navbar-inverse navbar-static-top" role="navigation" id="navbar">
			    <div className="container">
			        <div className="navbar-header">
			             <a className="navbar-toggle"> 
      
			                <span className="sr-only">Toggle navigation</span>
			                <span className="icon-bar" ></span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			            </a>
			        </div>

		        
			        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			            <ul className="nav navbar-nav">
			                	<li role="presentation" id="homenav"><a href="#home">Home</a></li>
								<li role="presentation" id="findnav"><a href="#findThingsList">Find things!</a></li>
								<li role="presentation" id="listnav"><a href="#listThings">List things!</a></li>
								<li role="presentation" id="aboutnav"><a href="#aboutUs">About us!</a></li>
			            </ul>
			        </div>
		    	</div>
			</nav>

	  );
	}
});