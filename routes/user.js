const express = require("express")
const userController = require('../controllers/userController')
const router = express.Router();

router
.get('/',userController.getAll)
.get('/:id',userController.getById)
.post('/',userController.create)

module.exports = router
