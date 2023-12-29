//const authorOrder = require('../../models/authOrder')
//const customerOrder = require('../../models/customerOrder')
//const SupervisorWallet = require('../../models/SupervisorWallet')
const SupervisorModel = require('../../models/SupervisorModel')
const EmployeeModel = require('../../models/AddEmployeeModel')

//const { mongo: { ObjectId } } = require('mongoose')
const { resposeReturn } = require('../../utils/response')

{/*module.exports.get_seller_dashboard_data = async (req, res) => {
    const { id } = req;

    try {
        const totalSupervisor = await SupervisorWallet.aggregate([
            {
                $match: {
                    sellerId: {
                        $eq: id
                    }
                }
            }, {
                $group: {
                    _id: null,
                    totalAmount: { $sum: '$amount' }
                }
            }
        ])

        const totalProduct = await productModel.find({
            sellerId: new ObjectId(id)
        }).countDocuments()

        const totalOrder = await authorOrder.find({
            sellerId: new ObjectId(id)
        }).countDocuments()

     
        const messages = await sellerCustomerMessage.find({
            $or: [
                {
                    senderId: {
                        $eq: id
                    }
                },
                {
                    receverId: {
                        $eq: id
                    }
                }
            ]
        }).limit(3)

        const recentOrders = await authorOrder.find({
            sellerId: new ObjectId(id)
        }).limit(5)

        resposeReturn(res, 200, {
            totalOrder,
            totalSale: totalSele.length > 0 ? totalSele[0].totalAmount : 0,
            totalPendingOrder,
            messages,
            recentOrders,
            totalProduct
        })
    } catch (error) {
        console.log('get seller dashboard data error ' + error.messages)
    }
}*/}


module.exports.get_admin_dashboard_data = async (req, res) => {
    const { id } = req
    try {
        const totalemployee = await EmployeeModel.find({}).countDocuments()
        const totalSupervisor = await SupervisorModel.find({}).countDocuments()

         resposeReturn(res, 200, {
            totalSupervisor,
            totalemployee
        })

    } catch (error) {
        console.log('get admin dashboard data error ' + error.messages)
    }

}