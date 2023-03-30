const express = require('express');
const router = express.Router();

const { getAllsongs,
        getsongbyId,
        uploadNewsong,
        updateSong,
        deleteSong } = require('../controllers/songs.controller')



router.get('/', getAllsongs)  
router.get('/:id',getsongbyId)   
router.post('/',uploadNewsong)   
router.patch('/:id',updateSong)
router.delete('/:id', deleteSong)


module.exports = router