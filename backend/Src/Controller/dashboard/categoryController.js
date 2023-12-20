const categoryModel = require('../../models/categoryModel')
const { resposeReturn } = require('../../utils/response')
const cloudinary = require('cloudinary').v2
const formidable = require('formidable')

class categoryController {

    add_category = async (req, res) => {
        const form =new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (err) {
                resposeReturn(res, 404, { error: 'something error' })
            } else {
                let { name } = fields;
                 if (name && typeof name === 'string') {
                 name = name.trim();
                  } else {
                // Handle the case where 'name' is not a valid string (optional)
                throw new Error('Invalid name field');
                    }

                 const slug = typeof name === 'string' ? name.split(' ').join('-') : '';

                cloudinary.config({
                    cloud_name: process.env.cloud_name,
                    api_key: process.env.api_key,
                    api_secret: process.env.api_secret,
                    secure: true
                })

                try {
                    const result = await cloudinary.uploader.upload(image.filepath, { folder: 'categorys' })

                    if (result) {
                        const category = await categoryModel.create({
                            name,
                            slug,
                            image: result.url
                        })
                        resposeReturn(res, 201, { category, message: 'category add success' })
                    } else {
                        resposeReturn(res, 404, { error: 'Image upload failed' })
                    }
                } catch (error) {
                    resposeReturn(res, 500, { error: 'Internal server error' })
                }

            }
        })
    }

    get_category = async (req, res) => {
        const { page, searchValue, parPage } = req.query
        try {
            let skipPage = ''
            if (parPage && page) {
                skipPage = parseInt(parPage) * (parseInt(page) - 1)
            }
            if (searchValue && page && parPage) {
                const categorys = await categoryModel.find({
                    $text: { $search: searchValue }
                }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalCategory = await categoryModel.find({
                    $text: { $search: searchValue }
                }).countDocuments()
                resposeReturn(res, 200, { totalCategory, categorys })
            }
            else if (searchValue === '' && page && parPage) {
                const categorys = await categoryModel.find({}).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalCategory = await categoryModel.find({}).countDocuments()
                resposeReturn(res, 200, { totalCategory, categorys })
            }
            else {
                const categorys = await categoryModel.find({}).sort({ createdAt: -1 })
                const totalCategory = await categoryModel.find({}).countDocuments()
                resposeReturn(res, 200, { totalCategory, categorys })
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = new categoryController()