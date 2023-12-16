const CategoryModel = require('../../models/categoryModel')
const {resposeReturn} = require('../../utils/response')
const cloudinary = require('cloudinary').v2
const formidable = require('formidable')

class categoryController {

    add_category = async (req, res, next) => {
        const { name, image } = req.body;
        if (!name || !image) {
            res.status(400)
            return next(new Error("name & image fields require"))
        }
        try {
            const add_category = await CategoryModel.create({
                name,
                image
            });
            res.status(201).json({
                success: true,
                CategoryModel
            })
        } catch (error) {
            console.log(error);
            res.status(500);
            next(error);
        }
   }

  get_category = async (req, res) => {
    const { page, searchValue, parPage } = req.query;

    try {
        let skipPage = 0;

        if (parPage && page) {
            const parsedPage = parseInt(page);
            const parsedParPage = parseInt(parPage);

            if (!isNaN(parsedPage) && !isNaN(parsedParPage) && parsedPage > 0 && parsedParPage > 0) {
                skipPage = parsedParPage * (parsedPage - 1);
            } else {
                throw new Error('Invalid page or itemsPerPage parameters');
            }
        }

        const query = searchValue ? { $text: { $search: searchValue } } : {};

        const categorys = await CategoryModel.aggregate([
            { $match: query },
            { $sort: { createdAt: -1 } },
            { $skip: skipPage },
            { $limit: parPage ? parseInt(parPage) : 0 },
            { $project: { _id: 0, name: 1, slug: 1, image: 1, createdAt: 1 } }
        ]);

        const totalCategory = await CategoryModel.countDocuments(query);

        return resposeReturn(res, 200, { totalCategory, categorys });
    } catch (error) {
        console.log(error.message);
        return resposeReturn(res, 500, { error: 'Internal server error' });
    }
};


}

module.exports = new categoryController()