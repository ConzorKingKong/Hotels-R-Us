var mongoose = require('mongoose')

var reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
})

var roomSchema = new mongoose.Schema({
  type: String,
  number: Number,
  description: String,
  photo: [String],
  price: Number
})

var hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  services: [String],
  description: String,
  photos: [String],
  currency: String,
  reviews: [reviewSchema],
  rooms: [roomSchema],
  location: {
    address: String,
    // Always store coordinates in lon/lat order
    coordinates: {
      type: [Number],
      index: '2dsphere'
    }
  }
})

mongoose.model('Hotel', hotelSchema, 'hotels')

// a model is a compiled schema. second arguement is the schema, third is the name
// of the database in Mongo. first is ...?. the thirs arguement will be assumed to be
// a pluralized version of the first arguement with a lower case first letter if a third
// arguement is not given
