var React = require('react'); 
var validator = require('validator'); 
var ListingModel = require("../models/listingModel");
var _ = require('../../node_modules/underscore/underscore-min.js');



module.exports = React.createClass({

	getInitialState: function() {
		return {
			errors:{}
		}
	},
	
	render: function () {
		return (
			<div className="listingform">
				<div className="container">
					<center><h2 id="listyouritem">List your item!</h2></center>
					
					
					
					<h3 id="aboutyou">About you:</h3>
					  <form type="submit" ref="listing" onSubmit={this.listingsubmit}>
					    
					    <div className="form-group" >
					      Your name:
					      <input type="text" ref="name" className="form-control" id="name" placeholder="Bo Jangles" />
					    	<p className="text-danger">{this.state.errors.name}</p>
					    </div>

					    <div className="form-group">
					     Email:
					      <input type="email" ref="email" className="form-control" id="email" placeholder="bo@gmail.com" />
							<p className="text-danger">{this.state.errors.email}</p>
						</div>

						<div className="form-group">
					     Phone number:
					      <input type="tel" ref="phone" className="form-control" id="phone" placeholder="512-555-5555" />
							<p className="text-danger">{this.state.errors.phone}</p>
						</div>

						<div className="form-group" >
					     Street address:
					      <input type="text" ref="address" className="form-control" id="address" placeholder="123 Dancing Dr" />
							<p className="text-danger">{this.state.errors.address}</p>
						</div> 

						<div className="form-group">
					     Zipcode:
					      <input type="number" ref="zip" className="form-control" id="zip" placeholder="78704" />
							<p className="text-danger">{this.state.errors.zip}</p>
						</div> 


						<h3 id="aboutitem">About your item:</h3>        				  
    				  	
    				  	<div className="form-group">
					     Choose a title for your listing:
					      <input type="text" ref="title" className="form-control" id="title" placeholder="Toaster oven" />
							<p className="text-danger">{this.state.errors.title}</p>
						</div> 

						<div className="form-group">
					     Describe your item:
					      <input type="text" ref='description' className="form-control" id="description" placeholder="Bought two years ago. Still works great!" />
							<p className="text-danger">{this.state.errors.description}</p>
						</div> 

						<div className="form-group">
					     Item condition:
					      <input type="text" ref='condition' className="form-control" id="condition" placeholder="Works 80% of the time." />
							<p className="text-danger">{this.state.errors.condition}</p>
						</div> 

						<div className="form-group">
						Choose a category:
						<select ref='category' ref="category" className="form-control" id="category">
						      <option value='select'>Please select</option>
						      <option value='apparel'>Apparel/shoes</option>
						      <option value='bicycles'>Bicycles</option>
						      <option value='books'>Books</option>
						      <option value='electronics'>Electronics</option>
						      <option value='furniture'>Furniture</option>
						      <option value='instruments'>Instruments</option>
						      <option value='jewelry'>Jewelry</option>
						      <option value='kids'>Kids stuff</option>
						      <option value='sports'>Sports stuff</option>
						      <option value='toys'>Toys</option>
						      <option value='whatever'>Whatever?</option>
					    </select>
					    </div>

					    <button type="button" className="btn btn-default" onClick={this.uploadImage} >Upload image</button>
					    	{ /* this.state.imageUrl */ }
					    	{this.state.imageUrl ? "Image successfully uploaded!": "" }
					    	{ /* if this is truthy, image uploaded */ }

					    <center><button type="submit" id="submitlistingbutton" className="btn btn-primary" >
  							Submit your listing
						</button></center>

						

    				  </form>	

    			</div>
    		</div>	
		);
	},

	listingsubmit: function(e) {
		e.preventDefault();

		var that = this;
		var errors = {};

			this.props.listing.set("userName", that.refs.name.getDOMNode().value);
			this.props.listing.set("userEmail", that.refs.email.getDOMNode().value);
			this.props.listing.set("userPhone", that.refs.phone.getDOMNode().value);
			this.props.listing.set("userAddress", that.refs.address.getDOMNode().value);
			this.props.listing.set("userZip", that.refs.zip.getDOMNode().value);
			this.props.listing.set("title", that.refs.title.getDOMNode().value);
			this.props.listing.set("description", that.refs.description.getDOMNode().value);
			this.props.listing.set("itemCondition", that.refs.condition.getDOMNode().value);
			this.props.listing.set("category", that.refs.category.getDOMNode().selected);
			this.props.listing.set("itemImage", this.state.imageUrl);


		if (!this.props.listing.get('userName')) {
			errors.name = "please enter a first name at least, otherwise it's awkward";
		}
		if (!this.props.listing.get('userEmail')) {
			errors.email = 'please enter an email address';
		}
		if (!this.props.listing.get('userPhone')) {
			errors.phone = 'please enter a phone number';
		}
		if (!this.props.listing.get('userAddress')) {
			errors.address = 'please enter your street address';
		}
		if (!this.props.listing.get('userZip'))  {
			errors.zip = 'please enter a valid zipcode';
		}
		if (!this.props.listing.get('title')) {
			errors.title = 'please enter a title for your listing';
		}
		if (!this.props.listing.get('description')) {
			errors.description = 'please enter a brief description for your listing';
		}
		if (!this.props.listing.get('itemCondition')) {
			errors.itemCondition = 'please let us know the condition of your item';
		}


		console.log(errors);
		if(_.isEmpty(errors)) {

			this.props.listing.save(
				null, 
				{
			    success: function(listingModel) {
			    	that.props.myApp.navigate('listSuccess', {trigger: true});
			        
			    },
			    error: function(listingModel, response) {
			    	that.refs.serverError.getDOMNode().innerHTML = response.responseJSON.error;
			        console.log('listing was not registered', response.responseJSON);
			    	that.setState({errors: {server: response.responseJSON.error}});
			    	
			    }
			});
		}

		else {
			that.setState({errors: errors});
		}
	},



	uploadImage: function() {
		var self=this;
		console.log ("image submit")
		filepicker.pickAndStore(
			{
			mimetype: "image/*"
			},
			{},
			function(response){
				// console.log(response);
				// var imageUrl = response[0];
				// 	response[0].url
				
				self.setState({imageUrl: response[0].url})
			}
		);
	}
					



				
	
});