const express = require('express');
const router = express.Router();

const {createAdmin,loginAdmin, updateAdmin, deleteAdmin} = require('../controllers/admin.controller');



router.post('/register',createAdmin)
router.post('/login', loginAdmin)
router.put('/:id', updateAdmin)
router.delete('/:id', deleteAdmin)



module.exports = router;