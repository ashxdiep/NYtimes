var React = require("react");
var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

//components
var Main = require("../components/Main");
var Search = require("../components/Search");
var Results = require("../components/Results");
var Saved = require("../components/Saved");

module.exports = (
  <Router history = {hashHistory}>
    <Route path = "/" component = {Main}>

      <Route path = "search" component = {Search}/>
      <Route path = "results" component = {Results}/>
      <Route path = "saved" component = {Saved}/>


    </Route>
  </Router>
);
