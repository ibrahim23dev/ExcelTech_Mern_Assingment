const categoryModel = require('../../models/categoryModel')
const { responseReturn } = require('../../utiles/response')
const cloudinary = require('cloudinary').v2
const formidable = require('formidable')

class categoryController {

   add_category = async (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        responseReturn(res, 404, { error: "Somethings error" });
      } else {

        let { name } = fields;

        // Ensure that name is a string
        if (Array.isArray(name)) {
          // If it's an array, take the first element
          name = name[0];
        }
        // Now, you can proceed with the rest of your code
          // 
          name = name.trim();
         const slug = name.split(' ').join('-');

        let { image } = files;

        cloudinary.config({
          cloud_name: process.env.cloud_name,
          api_key: process.env.api_key,
          api_secret: process.env.api_secret,
          secure: true,
        });
        try {
          const result = await cloudinary.uploader.upload(image[0].filepath, {
            folder: "Catalog",
          });

          if (result) {
            const Add = await categoryModel.create({
              name,
              slug,
              image: result.url
            });

            responseReturn(res, 201, {
              Add,
              message: "Category add Successful",
            });
          } else {
            console.error("Image upload failed");
            responseReturn(res, 404, { error: "Image Upload fails" });
          }
        } catch (error) {
          console.error("Internal Server Error:", error);
          responseReturn(res, 500, { error: "Internal Server Error" });
        }
      }
    });
  };

   get_category = async (req, res) => {
    const { page, searchValue, parPage } = req.query;
    try {
      let skipPage = "";
      if (parPage && page) {
        skipPage = parseInt(parPage) * (parseInt(page) - 1);
      }
      if (searchValue && page && parPage) {
        const categorys = await categoryModel
          .find({
            $text: { $search: searchValue },
          })
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });
        const totalCategory = await categoryModel
          .find({
            $text: { $search: searchValue },
          })
          .countDocuments();
        responseReturn(res, 200, { totalCategory, categorys });
      } else if (searchValue === "" && page && parPage) {
        const categorys = await categoryModel
          .find({})
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });
        const totalCategory = await categoryModel.find({}).countDocuments();
        responseReturn(res, 200, { totalCategory, categorys });
      } else {
        const categorys = await categoryModel.find({}).sort({ createdAt: -1 });
        const totalCategory = await categoryModel.find({}).countDocuments();
        responseReturn(res, 200, { totalCategory, categorys });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = new categoryController()