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
                console.log('listings sync');
            })    
            console.log(this.props.id)

        }, 

        getInitialState: function() {

            return {listing: {}} 
        },
 
    render: function () {
        console.log(this.state.listing);
        
  
     //    var detailEls = this.props.listings(function(ListingModel) {
    	// 	return (

     //            <div id="renderlistingdetail">

     //                <div key={ListingModel.cid}>
     //        			<div className="container" id="listingdetailbox">
     //                    <h2 id="listingheading">Listing details:</h2>
     //          				<div className="row">
     //          					<div id="itemdetail" className="col-xs-12 col-s-8 col-s-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
     //          						<h4>{ListingModel.get("title")}</h4>
              					
     //                            </div>
     //                        </div>
     //                        <div className="row">
     //                            <div className="col-xs-4 col-s-4 col-md-3 col-lg-3">
     //                                    <div id="listingimagebox">
     //                                        <img id="listingimage" src={ListingModel.get("itemImage")} />
     //                                    </div>
     //                            </div>
     //                            <div id="itemdetail" className="col-xs-12 col-s-8 col-s-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
     //                                <p>{ListingModel.get("description")}</p>
     //                            </div>
     //                            <div id="itemdetail" className="col-xs-12 col-s-8 col-s-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
     //                                <p>{ListingModel.get("userZip")}</p>
     //                            </div>
     //                        </div>
     //                        <div className="row">
     //                            <div className="col-xs-6 col-xs-offset-6 col-sm-6 col-sm-offset-6 col-md-4 col-md-offset-6 col-lg-3 col-md-offset-6">
     //                                <h6>{ListingModel.get("userName")}</h6>
     //                            </div>
     //                        </div>
     //                        <div className="row">   
     //                            <div id="listingzip" className="col-xs-6 col-xs-offset-6 col-sm-6 col-sm-offset-6 col-md-4 col-md-offset-6 col-lg-3 col-md-offset-6">
     //                                <p>{ListingModel.get("userAddress")} </p>
     //                            </div>
     //                        </div>
                            
     //                        <div className="row">   
     //                            <div id="listingzip" className="col-xs-6 col-xs-offset-6 col-sm-6 col-sm-offset-6 col-md-4 col-md-offset-6 col-lg-3 col-md-offset-6">
     //                                <p>{ListingModel.get("userZip")} </p>
     //                            </div>
     //                        </div>
     //          			</div>
     //        		</div>

     //            </div>

    	// 	);
	    // });
        
        return (
            <div id="renderlistingdetail">
                <div key={ListingModel.cid}>
                    <div className="container" id="listingdetailbox">
                        <h2 id="listingheading">Listing details:</h2>
                             <div className="row">
                                 <div id="itemdetail" className="col-xs-12 col-s-8 col-s-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                                     <h4>{this.listings.get.title}</h4>
                                
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
                //build out html here
        );  

    },   
});