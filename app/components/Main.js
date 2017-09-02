var React = require("react");
var Link = require("react-router").Link;

//other sub-components

var Results = require("./Results");
var Saved = require("./Saved");

//for requests
var helpers = require("../utils/helpers");

// creating Main component
var Main = React.createClass({

  //the initial state
  //States that will change: the start and end date coming when searching
  getInitialState: function() {
    return {startYear: '', endYear: '', searchTerm: "", resultsTitle: [], resultsUrl: []};
  },

  //if search is entered, handle click
  searchArticle: function() {

    //that means the search term, begin year, and end year has already been updated
    //make a query using ajax call
    helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function(data) {

      //after getting results from the search term, savce the first five Articles
      console.log("Results: " + data);

      //make a new array
      var resultstitles = [];
      var resultsurl = [];

      for (var i = 0; i < 5; i++) {

        //push 5 result headlines into the results Title array
        resultstitles.push(data.response.docs[i].headline.main);

        //push corresponsing 5 website url into resultsURL ARRAY
        resultsurl.push(data.response.docs[i].web_url);
      }

      this.setState({resultsTitle: resultstitles});
      this.setState({resultsUrl: resultsurl});

    }.bind(this));
  },

  //when the search term, begin year, or end year gets changed, change the state
  handleChange: function() {

    setState({event.target.id: event.target.value});
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">
              New York Times Scrubber
            </h2>

          </div>
        </div>

        <div className="row">
          <div className="col-md-12">

            {/* Search bar  */}
            <form>
              <div className="form-group">
                <h4 className="text-center">
                  <strong>Search a topic!</strong>
                </h4>
                <input type="text" className="form-control text-center" id="searchTerm" onChange={this.handleChange} required/>
                <br/>
                <h4 className="text-center">
                  <strong>Enter a Start Date (YYYYMMDD)</strong>
                </h4>
                <input type="text" className="form-control text-center" id="startYear" onChange={this.handleChange} required/>
                <br/>
                <h4 className="text-center">
                  <strong>Enter an End Date (YYYYMMDD)</strong>
                </h4>
                <input type="text" className="form-control text-center" id="endYear" onChange={this.handleChange} required/>
                <br/>
                <button type="button" className="btn btn-primary btn-block text-center" onClick={this.searchArticle}>Search</button>
              </div>
            </form>
          </div>
        </div>

        <div className = "row">
          <div className = "col-md-12">

            {/* This is where the results will lie  Pass in results to display*/}
            <Results titles = {this.state.resultsTitle} urls = {this.state.resultsUrl} search = {this.state.searchTerm}/>

          </div>
        </div>
      </div>
    );
  }

  module.exports = Main;
