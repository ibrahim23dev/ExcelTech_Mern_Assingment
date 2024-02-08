const formidable = require('formidable')
const taskModel = require('../../models/TaskModel');
const { responseReturn } = require('../../utiles/response');

class TaskController {
    create_task = async (req, res) => {
        const { id } = req;
        const form = new formidable.IncomingForm();

        form.parse(req, async (err, field, __) => {
            let { title, email,description, status} = field;
          
            try {
                await taskModel.create({
                    title,
                    email,
                    description: description.trim(),
                    status
                    
                })
                responseReturn(res, 201, { message: "Task add success" })
            } catch (error) {
                responseReturn(res, 500, { error: error.message })
            }

        })
    }

    get_task = async (req, res) => {
        const { page, searchValue, parPage } = req.query
        const { id } = req;
        const skipPage = parseInt(parPage) * (parseInt(page) - 1);
        try {
            if (searchValue) {
                const task = await taskModel.find({
                    $text: { $search: searchValue },
                    userId: id
                }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totaltask = await taskModel.find({
                    $text: { $search: searchValue },
                    userId: id
                }).countDocuments()
               responseReturn(res, 200, { totaltask, task })
            } else {
                const task = await taskModel.find({ userId: id }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totaltask = await taskModel.find({ userId: id }).countDocuments()
                responseReturn(res, 200, { totaltask,task})
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    task_update = async (req, res) => {
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

    
}

module.exports = new TaskController()