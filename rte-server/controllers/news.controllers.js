const News = require('../models/news.model')

//create news
const createNews = async (req, res) => {
 
  try {
    const news =  await News.create({...req.body})
    res.status(200).json(news);
  } catch (err) {
    res.status(500).send(err);
  }
 
};

const getNewsById = async (req, res) => {
  const getnewId = await News.findById(req.params.id)
  if(!getnewId ){
    return res.status(400).json({msg:'No News found by this Id'})
 }else{
  return res.status(200).json(getnewId)
 }
};

const updateNewsById = async (req, res) => {
    const updatedNews = await News.findByIdAndUpdate(req.params.id,{$set:req.body},
        {new:true})
        if(!updatedNews ){
           return res.status(400).json({msg:'No News found'})
        }else{
         return res.status(200).json({updatedNews ,msg:'News updated sucessfully'})
        }
};

const deleteNewsById = async (req, res) => {
    try {
        const deletedNews = await News.findByIdAndDelete(req.params.id)
        res.status(200).send('News deleted successfully');  
      } catch (error) {
        res.status(500).json(error)
      }
     
};


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