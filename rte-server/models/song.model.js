const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    title: { type: String, 
            required: true 
    },
  artist: { type: String, 
            required: true 
        },
   song:{
   type:String,
   required: true
   },
  songsvideo:{
     type:String,
  },
  genre: { type: String
        },
  year: { type: Number,
         required: true 
        },

},{ timestamps: true })

module.exports = mongoose.model('Songs',songSchema)