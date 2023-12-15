const categoryModel = require('../../models/categoryModel')
const { resposeReturn } = require('../../utils/response')
const cloudinary = require('cloudinary').v2
const formidable = require('formidable')

class categoryController {

   add_category = async (req, res) => {
        const form = new formidable.IncomingForm();

        form.parse(req, async (err, fields, files) => {
            if (err) {
                resposeReturn(res, 404, { error: 'something error' });
            } else {
                try {
                    const { name } = fields;
                    const { image } = files;

                    const slug = typeof name === 'string' ? name.split(' ').join('-') : '';
                    cloudinary.config({
                        cloud_name: process.env.cloud_name,
                        api_key: process.env.api_key,
                        api_secret: process.env.api_secret,
                        secure: true
                    });

                    console.log('Uploaded Files:', files);

                    if (!image || !image[0] || !image[0].filepath) {
                        resposeReturn(res, 400, { error: 'No file uploaded' });
                        return;
                    }

                    const result = await cloudinary.uploader.upload(image[0].filepath, { folder: 'categories' });
                    console.log('Cloudinary Upload Result:', result);

                    if (result) {
                        const Category = await categoryModel.create({
                            name: fields.name,
                            slug,
                            image: result.url,
                        });

                        console.log('Category Created:', Category);
                        resposeReturn(res, 201, { Category, message: 'category add success' });
                    } else {
                        console.log('Image upload failed');
                        resposeReturn(res, 404, { error: 'Image upload failed' });
                    }
                } catch (error) {
                    console.error(error);
                    resposeReturn(res, 500, { error: 'Internal server error' });
                }
            }
        });
    };

   get_category = async (req, res) => {
    const { page, searchValue, parPage } = req.query;
    try {
        let skipPage = 0;
        if (parPage && page) {
            skipPage = parseInt(parPage) * (parseInt(page) - 1);
            if (isNaN(skipPage) || skipPage < 0) {
                resposeReturn(res, 400, { error: 'Invalid page or itemsPerPage parameters' });
                return;
            }
        }

        const query = searchValue
            ? { $text: { $search: searchValue } }
            : {};

        const categorys = await categoryModel.aggregate([
            { $match: query },
            { $sort: { createdAt: -1 } },
            { $skip: skipPage },
            { $limit: parPage ? parseInt(parPage) : 0 },
            { $project: { _id: 0, name: 1, slug: 1, image: 1, createdAt: 1 } }
        ]);

        const totalCategory = await categoryModel.countDocuments(query);

        resposeReturn(res, 200, { totalCategory, categorys });
    } catch (error) {
        console.log(error.message);
        resposeReturn(res, 500, { error: 'Internal server error' });
    }
}

}

module.exports = new categoryController()