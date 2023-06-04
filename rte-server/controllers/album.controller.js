const Album = require("../models/album.model");
const cloudinary = require("cloudinary").v2;
const express = require("express");
const app = express();
const expressfileuploader = require("express-fileupload");

//use express file uploader
app.use(
  expressfileuploader({
    useTempFiles: true,
  })
);

const createAlbum = async (req, res) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const { title, artist, releaseDate, desc } = req.body;

  const { tracklists, image } = req.files || req.files.tracklists;

  console.log(req.files)
  try {
    const result = await Promise.all(
      tracklists.map((tracklist) => {
        return cloudinary.uploader.upload(tracklist.tempFilePath, {
          resource_type: "auto",
          folder: "RTEalbum",
        });
      })
    );


    const link =await cloudinary.uploader.upload(image.tempFilePath,{
      folder:"RTEalbum"
  })
  console.log(link.secure_url)

    const albumFolder = [];
    for (let i = 0; i < result.length; i++) {
      albumFolder.push(result[i].secure_url);
    }

    console.log(albumFolder);
    //  let response =  await Promise.all(result)

    const album = await Album.create({
      title,
      artist,
      image:{
        public_id:link.public_id,
                url:link.secure_url
      },
      releaseDate,
      tracklists: albumFolder,
      desc,
    });

    res.status(200).json(album);
  } catch (err) {
    res.status(500).json("Error: " + err);
    console.log(err);
  }
};

// get all album
const getAllalbum = async (req, res) => {
  const album = await Album.find().sort({ field: 'asc', _id: -1 });
  res.status(200).json({ album, count: album.length });
};

const getAlbumId = async (req, res) => {
  Album.findById(req.params.id)
    .then((album) => res.json(album))
    .catch((err) => res.status(400).json("Error: " + err));
};

// update ablbum
const updateAlbumById = async (req, res) => {
  const updatedAlbum = await Album.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  if (!updatedAlbum) {
    return res.status(400).json({ msg: "No song found" });
  } else {
    return res
      .status(200)
      .json({ updatedAlbum, msg: "Song updated sucessfully" });
  }
};
//delete album
const deleteAlbumById = async (req, res) => {
  try {
    const deletedAlbum = await Album.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "album deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  createAlbum,
  getAlbumId,
  getAllalbum,
  updateAlbumById,
  deleteAlbumById
};
