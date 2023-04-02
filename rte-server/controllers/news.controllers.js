const News = require('../models/news.model')
const cloudinary = require('cloudinary').v2


 
require('dotenv').config();

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });


//create news
const createNews = async (req, res) => {

  const imagePath = req.file.path;

 
  try {
    const result =await cloudinary.uploader.upload(imagePath,{
      folder:"RTEblogImages"
    })
    console.log(result.secure_url)
   console.log(result.public_id);

    const news =  await News.create({
      title:req.body.title,
      description:req.body.description,
      body:req.body.body,
      image:{
        public_id:result.public_id,
        url:result.secure_url
      }
    })
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
 
};

//get a news by id
const getNewsById = async (req, res) => {
  const getnewId = await News.findById(req.params.id)
  if(!getnewId ){
    return res.status(400).json({msg:'No News found by this Id'})
 }else{
  return res.status(200).json(getnewId)
 }
};


//update a news
const updateNewsById = async (req, res) => {
    const updatedNews = await News.findByIdAndUpdate(req.params.id,{$set:req.body},
        {new:true})
        if(!updatedNews ){
           return res.status(400).json({msg:'No News found'})
        }else{
         return res.status(200).json({updatedNews ,msg:'News updated sucessfully'})
        }
};


//delete a news
const deleteNewsById = async (req, res) => {
    try {
        const deletedNews = await News.findByIdAndDelete(req.params.id)
        res.status(200).send('News deleted successfully');  
      } catch (error) {
        res.status(500).json(error)
      }
     
};

//get all news
const getAllNews = async (req, res) => {
    const Allnews = await News.find()
        if(!Allnews){
           return res.status(400).json({msg:' no news found'})
        }else{
         return res.status(200).json({Allnews})
        }
};


module.exports = {
    createNews,
    getNewsById,
    getAllNews,
    updateNewsById,
    deleteNewsById

}