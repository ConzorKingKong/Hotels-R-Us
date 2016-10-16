var MongoClient = require('mongodb').MongoClient
var dburl = 'mongodb://localhost:27017/meanhotel'

var _connection = null
var open = function() {
  MongoClient.connect(dburl, function(err, db) {
    if (err) {
      console.log("Mongo Connection Error", err)
      return
    }
    _connection = db
    console.log("connected to", db)
  })
}

var get = function(argument) {
  return _connection
}

module.exports = {
  open: open,
  get: get
}
