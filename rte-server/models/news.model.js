const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: { type: String, 
        required: true 
    },
  description: { type: String, 
                required: true 
            },
  body:{
              type:String,
              required:true
  },
  image:{
    public_id:String,
      url:String 
  },

},{ timestamps: true });

module.exports = mongoose.model('News', newsSchema);
