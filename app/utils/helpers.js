var axios = require ("axios");

var helpers = {

  runQuery : function(searchTerm, begin, end){

    //do the ajax call
    var query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=fd802dabac8c46a2a4b64731c0dbccbd&q=" + searchTerm + "?begin_date=" + begin + "?end_date=" + end;

    return axios.get(query)
      .then(function(response){

        //return result back to Main
        return response;
      });
  }

  
};

module.exports = helpers;
