const adminmodel = require('../models/adminModel');
const bcrypt = require('bcrypt');
const { resposeReturn } = require('../utils/response');
const {CreateToken} = require('../utils/CreateToken');

class AuthController {
    async adminlogin(req, res) {
        try {
            const { email, password } = req.body;
            const admin = await adminmodel.findOne({ email }).select('+password');
            if (!admin) {
                return resposeReturn(res, 404, { error: "Email Not Found" });
            }
            
            const match = await bcrypt.compare(password, admin.password);
            if (!match) {
                return resposeReturn(res, 404, { error: "Password is Invalid" });
            }

            const token = await CreateToken({
                id: admin.id,
                role: admin.role
            });

            res.cookie('accessToken', token, {
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            });

            resposeReturn(res, 200, { token, message: "Login Successful" });
        } catch (error) {
            resposeReturn(res, 500, { error: error.message });
        }
    }

    async getUser(req, res) {
        try {
            const { role, id } = req;

            if (role === 'admin') {
                const user = await adminmodel.findById(id);
                resposeReturn(res, 200, { userInfo: user });
            } else {
                console.log('Seller Find');
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = new AuthController();
