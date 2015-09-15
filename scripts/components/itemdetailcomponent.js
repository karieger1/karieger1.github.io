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
                console.log(singlelisting);
                self.setState ({listing: singlelisting})
                console.log('listings sync');
            })    
            console.log(this.props.id)

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

                <div className="container"> 
                        <div className="row">
                            <div id="itemdetail" className="col-xs-12 col-s-8 col-md-6 col-lg-6 ">
                                <h2 id="listingheading">Listing details:</h2>
                            </div>
                        </div>
                </div>

                 <div className="container" id="listingdetailbox"> 
                    <div className="row">
                         <div className="col-xs-12 col-s-8 col-s-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                             <h4 id ="itemtitle">{this.state.listing.get("title")} </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-s-6 col-md-6 col-lg-6">
                            <p id="username">Giver:  {this.state.listing.get("userName")}</p>
                        </div>
                        <div className="col-xs-12 col-s-6 col-md-6 col-lg-6">
                            <p id="listphoto"> {this.state.listing.get("itemImage")}</p>
                        </div>
                    </div>
                </div>
            
            </div>
                
        );  

    },   
});