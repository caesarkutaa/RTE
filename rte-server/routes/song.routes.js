const express = require('express');
const router = express.Router();


//controllers
const { getAllsongs,
        getsongbyId,
        searchForSong,
        uploadNewsong,
        updateSong,
        deleteSong,
        updatevideo  } = require('../controllers/songs.controller')


//middleware
const auth  = require('../middleware/auth')

//cloudinary
// const storage = multer.diskStorage({
//   filename: function(req, file, callback) {
//     callback(null, Date.now() + file.originalname);
//   }
    

// });


  // const upload = multer({ storage: storage });



  // const upload = multer({ storage: storage });
  


router.get('/',getAllsongs)
router.get('/search', searchForSong)    
router.get('/:id',auth,getsongbyId)   
router.post('/', auth,uploadNewsong)   
router.patch('/:id',auth ,updateSong)
router.patch('/addvideo/:id',auth , updatevideo)
router.delete('/:id',auth, deleteSong)


module.exports = router