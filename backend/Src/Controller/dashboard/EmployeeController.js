const formidable = require('formidable')
const cloudinary = require('cloudinary').v2
const ProductModel = require('../../models/AddEmployeeModel');
const { resposeReturn} = require('../../utils/response');
class EmployeeController {
    add_employee = async (req, res) => {
        const { id } = req;
        const form = new formidable.IncomingForm();

        form.parse(req, async ( fields, files) => {


            let { name, shift, email, salary, designation , date, shopName } = fields;
            if (Array.isArray(name,shift,email,salary,designation,date,shopName)) {
                name = name[0];
                email = email[0];
                shift = shift[0];
                designation = designation[0];
                salary = salary[0];
                date = date[0];
                shopName = shopName[0];
                brand=brand[0]
        }
            const { images } = files;
            name = name.trim();
            email = email.trim();
            shift = shift.trim();
            designation = designation.trim();
            salary = salary.trim();
            date = date.trim();
            shopName = shopName.trim();
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
                    console.log(result)
                }

                await ProductModel.create({
                    sellerId: id,
                    name,
                    slug,
                    shopName,
                    shift,
                    email,
                    designation,
                    date,
                    salary,
                    images: allImageUrl,
                   

                })
                resposeReturn(res, 201, { message: "employee add success" })
            } catch (error) {
                resposeReturn(res, 500, { error: error.message })
            }

        })
    }

    //Get product function

 employee_get= async (req, res) => {
     const { page, searchValue, parPage } = req.query;
     const { id } = req;
    const  skipPage = parseInt(parPage) * (parseInt(page) - 1);
    try {
      if (searchValue) {
          const products = await ProductModel.find({
              $text: { $search: searchValue },
              sellerId: id
          }).skip(skipPage).limit(parPage).sort({ createdAt: -1 });
          
        const totalProducts = await ProductModel.find({
            $text: { $search: searchValue },
            sellerId:id
          })
          .countDocuments();
        resposeReturn(res, 200, { totalProducts, products });
      } else {
          const products = await ProductModel.find({ sellerId: id }).skip(skipPage).limit(parPage).sort({createdAt: -1})
          const totalProducts = await ProductModel.find({sellerId: id}).countDocuments();
          resposeReturn(res, 200, { totalProducts, products });
      } 
      
    } catch (error) {
      console.log(error.message);
    }
  };

    
}

module.exports = new EmployeeController()