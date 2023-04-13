const mongoose = require('mongoose')
const albumSchema = new mongoose.Schema({
    title:{
      type:String
    },

    artist:{
      type:String
    },

    image:{
        type:String,
        url:String 
    },
    releaseDate: Date,

    tracklist:[{
      title: String,
      url:String,
      
}],
    desc:{
      type:String,
      max:500
  },
  
  },{ timestamps:true });
  
  module.exports = mongoose.model('Album', albumSchema);