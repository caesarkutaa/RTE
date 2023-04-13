const Album = require('../models/album.model')
const cloudinary = require('cloudinary').v2
const express = require('express');
const app = express();
const expressfileuploader = require('express-fileupload')


//use express file uploader
app.use(expressfileuploader({
    useTempFiles: true
  }))

const createAlbum = async(req,res) =>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      console.log(req.files)


      const { title, artist, releaseDate, desc } = req.body;

    const { tracklist, image } = req.files
    //   console.log(tracklist)
      
      try {
            const result = await cloudinary.uploader.upload(tracklist.tempFilePath,
        {
            resource_type:"auto",
            folder:"RTEalbum"
        },)
    
        console.log(result.secure_url)
       console.log(result.public_id);


        const album = await Album.create({
            title,
            artist,
            image:{
                url:result.secure_url
            },
            releaseDate,
            tracklist:{
                url:result.secure_url
            },
            desc,        })
        res.status(200).json(album);
      } catch (err) {
        res.status(500).json('Error: ' + err);
        console.log(err);
      }
}

    


const getAllalbum = async(req,res) =>{

}


const getAlbumId = async(req,res) =>{
    Album.findById(req.params.id)
    .then((album) => res.json(album))
    .catch((err) => res.status(400).json('Error: ' + err));
}

const updateAlbumById = async(req,res) =>{
    
}

const deleteAlbumById = async(req,res) =>{
    
}
const addSong = async(req,res) =>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      console.log(req.files)

      let { tracklist } = req.files;
    //   console.log(tracklist)


    const album = await Album.findById(req.params.id)
    try {

        const result =await cloudinary.uploader.upload(tracklist.tempFilePath,{
            resource_type:"auto",
            folder:"RTEalbum"
        })
        console.log(result.secure_url)
       console.log(result.public_id);

        await Album.updateOne({$push:{tracklist:req.body.tracklistId},
            tracklist:{
                public_id:result.public_id,
                url:result.secure_url
        },})
        res.status(200).json('added music')
        
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
      
     
}

const removeSong = async(req,res) =>{
    
}


module.exports = {
    createAlbum,
    getAlbumId,
    getAllalbum,
    updateAlbumById,
    deleteAlbumById,
    addSong,
    removeSong
}