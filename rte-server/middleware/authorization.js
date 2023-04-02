const Admin = require('../models/admin.model')

const checkAdmin = (req, res, next) => {
    if(req.user.isAdmin){
      next()
    }else{
      return res.status(401).json({ error: 'Unauthorized' })
    }
  };


module.exports = checkAdmin