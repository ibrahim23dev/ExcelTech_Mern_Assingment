const ShiftModel = require("../../models/ShiftModel");
const { resposeReturn } = require("../../utils/response");
const cloudinary = require("cloudinary").v2;
const formidable = require("formidable");


class ShiftController {
  add_shift = async (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        resposeReturn(res, 404, { error: "Somethings error" });
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
            const Add = await ShiftModel.create({
              name,
              slug,
              image: result.url
            });

            resposeReturn(res, 201, {
              Add,
              message: "Shift add Successful",
            });
          } else {
            console.error("Image upload failed");
            resposeReturn(res, 404, { error: "Image Upload fails" });
          }
        } catch (error) {
          console.error("Internal Server Error:", error);
          resposeReturn(res, 500, { error: "Internal Server Error" });
        }
      }
    });
  };

  get_shift = async (req, res) => {
    const { page, searchValue, parPage } = req.query;
    try {
      let skipPage = "";
      if (parPage && page) {
        skipPage = parseInt(parPage) * (parseInt(page) - 1);
      }
      if (searchValue && page && parPage) {
        const Shift = await ShiftModel.find({
            $text: { $search: searchValue },
          })
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });
        const totalShift = await ShiftModel.find({
            $text: { $search: searchValue },
          })
          .countDocuments();
        resposeReturn(res, 200, { totalShift, Shift });
      } else if (searchValue === "" && page && parPage) {
        const Shift = await ShiftModel.find({})
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });
        const totalShift = await ShiftModel.find({}).countDocuments();
        resposeReturn(res, 200, { totalShift, Shift });
      } else {
        const Shift = await ShiftModel.find({}).sort({ createdAt: -1 });
        const totalShift = await ShiftModel.find({}).countDocuments();
        resposeReturn(res, 200, { totalShift, Shift });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = new  ShiftController();
