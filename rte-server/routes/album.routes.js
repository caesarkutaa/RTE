const express = require('express')
const router = express.Router();

const {createAlbum,
getAlbumId,
getAllalbum,
updateAlbumById,
deleteAlbumById } = require('../controllers/album.controller')




router.get('/',getAllalbum)
router.get('/:id',getAlbumId)
router.post('/',createAlbum)
router.patch('/:id',updateAlbumById)
router.delete('/:id',deleteAlbumById)




module.exports = router