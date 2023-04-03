const express = require('express');
const router = express.Router();
const multer = require('multer')

const  { createNews,
         getNewsById,
         getAllNews,
         updateNewsById,
         deleteNewsById} = require('../controllers/news.controllers')

const auth = require('../middleware/auth')

// const Storage = multer.diskStorage({
//     destination: "image",
//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     }
    
// });

// const upload = multer({ storage: Storage })

router.post('/', auth,createNews)
router.get('/',  auth,getAllNews);
router.get('/:id', auth,getNewsById);
router.patch('/:id',auth, updateNewsById);
router.delete('/:id', auth,deleteNewsById);



module.exports = router