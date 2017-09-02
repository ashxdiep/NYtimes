var mongoose = require ("mongoose");

var Schema = mongoose.Schema;

var NytimesSchema = new Schema({
  title:{
    type: String
  },
  date:{
    type: Date
  },
  url:{
    type: String
  }
});

var Nytimes = mongoose.model("Nytimes", NytimesSchema);

module.exports = Nytimes;
