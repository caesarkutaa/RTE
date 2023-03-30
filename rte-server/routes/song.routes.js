const express = require('express');
const router = express.Router();

const { getAllsongs,
        getsongbyId,
        uploadNewsong,
        updateSong,
        deleteSong } = require('../controllers/songs.controller')

const auth  = require('../middleware/auth')

router.get('/', auth,getAllsongs)  
router.get('/:id',auth,getsongbyId)   
router.post('/', auth,uploadNewsong)   
router.patch('/:id',auth ,updateSong)
router.delete('/:id',auth, deleteSong)


module.exports = router