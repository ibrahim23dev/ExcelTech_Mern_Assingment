const formidable = require('formidable')
const cloudinary = require('cloudinary').v2
const employeeModel = require('../../models/employeeModel');
const { responseReturn } = require('../../utiles/response');
class employeeController {
    add_employee = async (req, res) => {
        const { id } = req;
        const form = formidable({ multiples: true })

        form.parse(req, async (err, field, files) => {
            let { name, email,department, date, salary, designation} = field;
            const { images } = files;
            name = name.trim()
            const slug = name.split(' ').join('-')

            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true
            })

            try {
                let allImageUrl = [];

                for (let i = 0; i < images.length; i++) {
                    const result = await cloudinary.uploader.upload(images[i].filepath, { folder: 'products' })
                    allImageUrl = [...allImageUrl, result.url]
                }

                await employeeModel.create({
                    sellerId: id,
                    name,
                    slug,
                    email,
                    department: department.trim(),
                    salary: salary.trim(),
                    designation: parseInt(designation),
                    images: allImageUrl,
                    date:date.trim()

                })
                responseReturn(res, 201, { message: "product add success" })
            } catch (error) {
                responseReturn(res, 500, { error: error.message })
            }

        })
    }

    employee_get = async (req, res) => {
        const { page, searchValue, parPage } = req.query
        const { id } = req;

        const skipPage = parseInt(parPage) * (parseInt(page) - 1);

        try {
            if (searchValue) {
                const employees = await employeeModel.find({
                    $text: { $search: searchValue },
                    sellerId: id
                }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalemployee = await productModel.find({
                    $text: { $search: searchValue },
                    sellerId: id
                }).countDocuments()
               responseReturn(res, 200, { totalemployee, employees })
            } else {
                const employees = await employeeModel.find({ sellerId: id }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalemployee = await employeeModel.find({ sellerId: id }).countDocuments()
                responseReturn(res, 200, { totalemployee,employees})
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    employee_get = async (req, res) => {
        const { productId } = req.params;
        try {
            const product = await productModel.findById(productId)
            responseReturn(res, 200, { product })
        } catch (error) {
            console.log(error.message)
        }
    }
    
    product_update = async (req, res) => {
        let { name, description, discount, price, brand, productId, stock } = req.body;
        name = name.trim()
        const slug = name.split(' ').join('-')
        try {
            await productModel.findByIdAndUpdate(productId, {
                name, description, discount, price, brand, productId, stock, slug
            })
            const product = await productModel.findById(productId)
            responseReturn(res, 200, { product, message: 'product update success' })
        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }
    
    product_image_update = async (req, res) => {
        const form = formidable({ multiples: true })

        form.parse(req, async (err, field, files) => {
            const { productId, oldImage } = field;
            const { newImage } = files

            if (err) {
                responseReturn(res, 404, { error: err.message })
            } else {
                try {
                    cloudinary.config({
                        cloud_name: process.env.cloud_name,
                        api_key: process.env.api_key,
                        api_secret: process.env.api_secret,
                        secure: true
                    })
                    const result = await cloudinary.uploader.upload(newImage.filepath, { folder: 'products' })

                    if (result) {
                        let { images } = await productModel.findById(productId)
                        const index = images.findIndex(img => img === oldImage)
                        images[index] = result.url;

                        await productModel.findByIdAndUpdate(productId, {
                            images
                        })

                        const product = await productModel.findById(productId)
                        responseReturn(res, 200, { product, message: 'product image update success' })
                    } else {
                        responseReturn(res, 404, { error: 'image upload failed' })
                    }
                } catch (error) {
                    responseReturn(res, 404, { error: error.message })
                }
            }
        })
    }
}

module.exports = new employeeController()