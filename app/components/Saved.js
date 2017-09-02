var Saved = React.createClass({

  render: function(){
    return (

      //need to map out whatever is in the array
      <div className = "panel panel-default">
            <div className = "panel-heading"> Saved Articles </div>
            <div class = "panel-body">
              <a href = {this.props.savedUrls[0]}> {this.props.titles[0]}</a> <button type = "button" onClick = {this.saveArticle} data-title={this.props.titles[0]} data-url = {this.props.urls[0]}> Save! </button>
              <a href = {this.props.urls[1]}> {this.props.titles[1]}</a> <button type = "button" onClick = {this.saveArticle} data-title={this.props.titles[1]} data-url = {this.props.urls[1]}> Save! </button>
              <a href = {this.props.urls[2]}> {this.props.titles[2]}</a> <button type = "button" onClick = {this.saveArticle} data-title={this.props.titles[2]} data-url = {this.props.urls[2]}> Save! </button>
              <a href = {this.props.urls[3]}> {this.props.titles[3]}</a> <button type = "button" onClick = {this.saveArticle} data-title={this.props.titles[3]} data-url = {this.props.urls[3]}> Save! </button>
              <a href = {this.props.urls[4]}> {this.props.titles[4]}</a> <button type = "button" onClick = {this.saveArticle} data-title={this.props.titles[4]} data-url = {this.props.urls[4]}> Save! </button>
            </div>
          </div>
    );
  }
});

module.exports = Saved;
