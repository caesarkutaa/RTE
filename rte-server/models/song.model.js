const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
songname:{
                type:String,
                required: true
        },
desc:{
                type:String,
                required: true,
                max:500
        },
image:{
                public_id:String,
                url:String ,
               
        },
artist:{
                type: String, 
                required: true 
        },
audio:{
                 public_id:String,
                  url:String,
              
              },
        
  songsvideo:{
                type:String,
  },
 

},{ timestamps: true })

module.exports = mongoose.model('Songs',songSchema)