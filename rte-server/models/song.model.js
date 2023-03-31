const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
songname:{
                type:String,
                required: true
        },
artist:{
                type: String, 
                required: true 
        },
song:{
                 type:String,
                required: true
        },
        
  songsvideo:{
                type:String,
  },
 

},{ timestamps: true })

module.exports = mongoose.model('Songs',songSchema)