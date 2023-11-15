const express = require('express');
const router = express.Router();

const Song = require('../models/song.model')
const News   = require('../models/news.model')
const Album = require('../models/album.model')

//Authentication
const auth = require('../middleware/auth')
const checkAdmin = require('../middleware/authorization')


router.get('/songs', auth, checkAdmin, async (req, res) => {
 const songs = await Song.find()
 res.status(200).json({songs_count:songs.length})

})

router.get('/news', auth , checkAdmin ,async (req, res) => {

    const news = await News.find()
    res.status(200).json({news_count:news.length})

   })
  
router.get('/album',auth, checkAdmin, async(req,res)=>{
        const album = await Album.find()
        res.status(200).json({album_count:album.length})
        
        console.log(album_count)
})

router.get('/video',auth, checkAdmin, async(req,res)=>{
        const songWithvideos = await Song.find({songsvideo:{$ne: '' } })
        res.status(200).json({songWithvideos_count:songWithvideos.length});
})
  
  module.exports = router
  
