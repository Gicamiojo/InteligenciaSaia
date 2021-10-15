const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost/InteligenciaSaia',{ useNewUrlParser:true,useCreateIndex: true, useUnifiedTopology: true}) 

mongoose.Promise = global.Promise;

module.exports = mongoose;