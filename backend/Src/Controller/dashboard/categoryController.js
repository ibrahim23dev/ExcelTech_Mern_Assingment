const CategoryModel = require('../../models/categoryModel')
const { responseReturn } = require('../../utils/response')
const cloudinary = require('cloudinary').v2
const formidable = require('formidable')

class CategoryController {

    addCategory = async (req, res) => {
        req.send('hellow world')
    }

    getCategory = async (req, res) => {
       res.send('get category')
    }
}
module.exports = new CategoryController()
