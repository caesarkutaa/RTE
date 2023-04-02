const express = require('express');
const router = express.Router();

const Song = require('../models/song.model')
const New   = require('../models/news.model')

//Authentication
const auth = require('../middleware/auth')
const checkAdmin = require('../middleware/authorization')


router.get('/songs', auth, checkAdmin, async (req, res) => {
 const songs = await Song.find()
 res.status(200).json({songs,count:songs.length})
 

})

router.get('/news', auth , checkAdmin ,async (req, res) => {
    const news = await New.find()
    res.status(200).json({news,count:news.length})
    
   
   })
  
  
  
  module.exports = router
  
  
  
  
  