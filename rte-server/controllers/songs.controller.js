const Song = require('../models/song.model')
const cloudinary = require('cloudinary').v2
const express = require('express');
const app = express();
const expressfileuploader = require('express-fileupload')

//get all songs
const getAllsongs = async(req,res)=>{
 
    Song.find()
    .then(songs => (
        res.status(200).json(songs)
    ))
    .catch(err => {
        res.status(404).json('Error: ' + err)
    })

}

const searchForSong = async(req,res)=>{
 
    const {songname} = req.query
    
    Song.find({songname})
    .then(song => (
        res.status(200).json({song})
    ))
    .catch(err => {
        res.status(404).json('Error: ' + err)
    })

}

//get a song by id
const getsongbyId = async(req,res)=>{
    Song.findById(req.params.id)
    .then((song) => res.json(song))
    .catch((err) => res.status(400).json('Error: ' + err));

}


//use express file uploader
app.use(expressfileuploader({
    useTempFiles: true
  }))
  

//upload a song
const uploadNewsong = async(req,res)=>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      console.log(req.files)

      let { audio } = req.files;
      console.log(audio)
    try {
        const result =await cloudinary.uploader.upload(audio.tempFilePath,{
            resource_type:"auto",
            folder:"RTEsongs"
        })
        console.log(result.secure_url)
       console.log(result.public_id);


        const song =  await Song.create({
            songname:req.body.songname,
            artist:req.body.artist,
            audio:{
                    public_id:result.public_id,
                    url:result.secure_url
            },
            songsvideo:req.body.songsvideo
        })
        res.status(200).json(song);
      } catch (err) {
        res.status(500).send(err);
        console.log(err);
      }
}

// update a song
const updateSong = async(req,res)=>{
    const updatedsong = await Song.findByIdAndUpdate(req.params.id,{$set:req.body},
        {new:true})
        if(!updatedsong ){
           return res.status(400).json({msg:'No song found'})
        }else{
         return res.status(200).json({updatedsong ,msg:'Song updated sucessfully'})
        }
}

//delete a song
const deleteSong = async(req,res)=>{
    try {
        const deletedsong = await Song.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:'Song deleted successfully'});  
      } catch (error) {
        res.status(500).json(error)
      }
}


//update only video
const updatevideo = async(req,res)=>{
    const { songVideo } = req.body

    if (!songVideo) return res.status(404).send({ error: 'Song not found' });
    try {
        const updatevideomp4 = await Song.updateOne({_id:req.params.id},{songsvideo: songVideo})
        res.status(200).json({msg:'Added video successfuly'});
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
}


module.exports = {
getAllsongs,
searchForSong,
getsongbyId,
uploadNewsong,
updateSong,
deleteSong,
updatevideo ,
}