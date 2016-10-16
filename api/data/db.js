var mongoose = require('mongoose')
var dburl = 'mongodb://localhost:27017/meanhotel'

mongoose.connect(dburl)

mongoose.connection.on('connected', () => {
  console.log("Connected mongoose to " + dburl)
})
mongoose.connection.on('disconnected', () => {
  console.log("mongoose disconnected")
})
mongoose.connection.on('error', (err) => {
  console.log("mongoose error " + err)
})

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log("connection closed through terminal (SIGINT)")
    process.exit(0)
  })
})
process.on('SIGTERM', () => {
  mongoose.connection.close(() => {
    console.log("connection closed through SIGTERM")
    process.exit(0)
  })
})
process.once('SIGUSR2', () => {
  mongoose.connection.close(() => {
    console.log("connection closed through SIGUSR2")
    process.kill(process.pid, 'SIGUSR2')
  })
})

require('./hotels.model')
require('./users.model')
