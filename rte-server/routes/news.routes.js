const express = require('express');
const router = express.Router();


const  { createNews,
         getNewsById,
         getAllNews,
         updateNewsById,
         deleteNewsById} = require('../controllers/news.controllers')

const auth = require('../middleware/auth')



router.post('/', auth,createNews)
router.get('/',  auth,getAllNews);
router.get('/:id', auth,getNewsById);
router.patch('/:id',auth, updateNewsById);
router.delete('/:id', auth,deleteNewsById);



module.exports = router