var React = require('react');
var $ = require('jquery');
var ListingModel = require("../models/ListingModel");
var ListingCollection = require("../collections/listingCollection");
var _ = require('../../node_modules/underscore/underscore-min.js');


module.exports = React.createClass({

        componentDidMount: function() {
            var self = this;
            this.props.listings.on("sync", function(){
                var singlelisting = self.props.listings.findWhere({objectId: self.props.id});
                
                self.setState ({listing: singlelisting})
            })    

        }, 

        getInitialState: function() {
            return {listing: false}; 
        },
 
    render: function () {
        console.log(this.state.listing);
        
        if (this.state.listing===false) {
            return (<div className="loadingdiv">Loading...</div>)
        };

        return (
            <div id="renderlistingdetail">

             

                <div className="container" id="listingdetailbox"> 
                    <div className="row">
                         <div className="col-xs-12 col-s-8 col-s-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                             <h4 id ="itemtitle">{this.state.listing.get("title")} </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-s-6 col-md-6 col-lg-6">
                            <p id="username"><strong>Giver:</strong>  {this.state.listing.get("userName")}</p>
                        </div>
                    
                        <div className="col-xs-12 col-s-6 col-md-6 col-lg-6">
                            <img id="listphoto" src={this.state.listing.get("itemImage")} />
                            <p id="giveremail"><strong>Email address:</strong>  {this.state.listing.get("userEmail")}</p>
                            <p id="giverphone"><strong>Contact number:</strong>  {this.state.listing.get("userPhone")}</p>
                            <p id="giveraddress"><strong>Located at:</strong>  {this.state.listing.get("userAddress")}</p>
                            <p id="giverzip"><strong>Zip:</strong>  {this.state.listing.get("userZip")}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-s-6 col-md-6 col-lg-6" id="itemitemdetails">
                            <p id="itemcond"><strong>Item condition:</strong>  {this.state.listing.get("itemCondition")}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-s-6 col-md-6 col-lg-6" id="itemitemdetails">        
                            <p id="itemdescription"><strong>Item description:</strong>  {this.state.listing.get("description")}</p>
                        </div>
                    </div>
                </div>
            
            </div>
                
        );  

    },   
});