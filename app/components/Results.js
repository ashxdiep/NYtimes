
var Saved = require("./Saved");

var axios = require ("axios");

var Results = React.createClass({

  getInitialState: function(){
    return{

      allSavedTitles : [],
      allSavedUrls: []
    }
  },

  saveArticle: function(){

    //post to database from setting state
    axios.post("/savedshiz", {title: event.target.dataset.title, url: event.target.dataset.url})
      .then(function(res){
        console.log("posted");


      //then do a get method to database and pull ALL saved
        axios.get("/savedshiz")
          .then(function(results)){
            console.log("Saved article: " + results);

            // push into array for the saved

            var resultsSavedTitles = [];
            var resultsSavedUrls = [];

            for (var i = 0; i < results.length; i++){

              resultsSavedTitles.push(results[i].title);
              resultsSavedUrls.push(results[i].url);

            }

            this.setState({ allSavedTitles : resultsSavedTitles});
            this.setState({ allSavedUrls :  resultsSavedUrls});
          }
      }.bind(this));



  },

  render: function(){
  if (this.props.search !== ""){

    return(
      <div className = "col-md-12">

        {/* List out all the results from search here */}
          <div className = "panel panel-default">
            <div className = "panel-heading"> Results </div>
            <div class = "panel-body">
              <a href = {this.props.urls[0]}> {this.props.titles[0]}</a> <button type = "button" onClick = {this.saveArticle} data-title={this.props.titles[0]} data-url = {this.props.urls[0]}> Save! </button>
              <a href = {this.props.urls[1]}> {this.props.titles[1]}</a> <button type = "button" onClick = {this.saveArticle} data-title={this.props.titles[1]} data-url = {this.props.urls[1]}> Save! </button>
              <a href = {this.props.urls[2]}> {this.props.titles[2]}</a> <button type = "button" onClick = {this.saveArticle} data-title={this.props.titles[2]} data-url = {this.props.urls[2]}> Save! </button>
              <a href = {this.props.urls[3]}> {this.props.titles[3]}</a> <button type = "button" onClick = {this.saveArticle} data-title={this.props.titles[3]} data-url = {this.props.urls[3]}> Save! </button>
              <a href = {this.props.urls[4]}> {this.props.titles[4]}</a> <button type = "button" onClick = {this.saveArticle} data-title={this.props.titles[4]} data-url = {this.props.urls[4]}> Save! </button>
            </div>
          </div>
      </div>

      <div className = "col-md-12">

        {/* This is hwere we'll put the saved data */}
        {/* Everytime a new title and url is saved, change the array of saved data to put out */}
        <Saved savedTitles = {this.state.allSavedTitles} savedUrls = {this.state.allSavedUrls} />
      </div>
    )

    }
    return(
      <div className = "col-md-12">

        {/* List out all the results from search here */}
          <div className = "panel panel-default">
            <div className = "panel-heading"> Results </div>
            <div class = "panel-body">
              Put in a topic to search articles!
            </div>
          </div>
      </div>

      <div className = "col-md-12">

        {/* This is hwere we'll put the saved data */}
        {/* Everytime a new title and url is saved, change the array of saved data to put out */}
        <Saved savedTitles = {this.state.allSavedTitles} savedUrls = {this.state.allSavedUrls} />
      </div>
    )
  }
});

module.exports = Results;
