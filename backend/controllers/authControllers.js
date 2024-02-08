const userModel = require('../models/usermodels');
const bcrypt = require('bcrypt'); // corrected require statement
const formidable = require('formidable');
const cloudinary = require('cloudinary').v2;
const { responseReturn } = require('../utiles/response');
const { createToken } = require('../utiles/tokenCreate');

class authControllers {
   
    async user_login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await userModel.findOne({ email }).select('+password');
            if (user) {
                const match = await bcrypt.compare(password, user.password);
                if (match) {
                    const token = await createToken({
                        id: user.id,
                        role: user.role
                    });
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
                    });
                    responseReturn(res, 200, { token, message: 'Login success' });
                } else {
                    responseReturn(res, 404, { error: "Password wrong" });
                }
            } else {
                responseReturn(res, 404, { error: "Email not found" });
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message });
        }
    }

    async user_register(req, res) {
        const { email, name, password } = req.body;
        try {
            const getUser = await userModel.findOne({ email });
            if (getUser) {
                responseReturn(res, 404, { error: 'Email already exists' });
            } else {
                const user = await userModel.create({
                    name,
                    email,
                    password: await bcrypt.hash(password, 10),
                    method: 'manual',
                    subjectInfo: {}
                });
                
                const token = await createToken({ id: user.id, role: user.role });
                res.cookie('accessToken', token, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                });
                responseReturn(res, 201, { token, message: 'Register success' });
            }
        } catch (error) {
            responseReturn(res, 500, { error: 'Internal server error' });
        }
    }

    profile_image_upload = async (req, res) => {
        const { id } = req
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, _, files) => {
            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true
            })
            const { image } = files
            try {
                const result = await cloudinary.uploader.upload(image.filepath, { folder: 'profile' })
                if (result) {
                    await userModel.findByIdAndUpdate(id, {
                        image: result.url
                    })
                    const userInfo = await userModel.findById(id)
                    responseReturn(res, 201, { message: 'image upload success', userInfo })
                } else {
                    responseReturn(res, 404, { error: 'image upload failed' })
                }
            } catch (error) {
                //console.log(error)
                responseReturn(res, 500, { error: error.message })
            }
        })
    }

    profile_info_add = async (req, res) => {
        const { division, district, sub_district } = req.body;
        const { id } = req;

        try {
            await userModel.findByIdAndUpdate(id, {
                subjectInfo: {
                    division,
                    district,
                    sub_district
                }
            })
            const userInfo = await userModel.findById(id)
            responseReturn(res, 201, { message: 'Profile info add success', userInfo })
        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }

    logout = async (req, res) => {
        try {
            res.cookie('accessToken',null,{
                expires : new Date(Date.now()),
                httpOnly : true
            })
            responseReturn(res,200,{message : 'logout success'})
        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }
}
module.exports = new authControllers()