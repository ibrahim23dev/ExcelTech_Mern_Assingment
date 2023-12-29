const SupervisorModel = require('../../models/SupervisorModel')
const { resposeReturn } = require('../../utils/response')

class SupervisorController {
    
    get_supervisor_request = async (req, res) => {
        const { page, searchValue, parPage } = req.query
        const skipPage = parseInt(parPage) * (parseInt(page) - 1)
        try {
            if (searchValue) {
                //const seller
            } else {
                const Supervisors = await SupervisorModel.find({ status: 'pending' }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalSupervisor = await SupervisorModel.find({ status: 'pending' }).countDocuments()
                resposeReturn(res, 200, { totalSupervisor, Supervisors})
            }
        } catch (error) {
            resposeReturn(res, 500, { error: error.message })
        }
    }
    get_supervisor = async (req, res) => {
        const { SupervisorId } = req.params

        try {
            const Supervisor = await SupervisorModel.findById(SupervisorId)
            resposeReturn(res, 200, { Supervisor })
        } catch (error) {
            resposeReturn(res, 500, { error: error.message })
        }
    }

    supervisor_status_update = async (req, res) => {
        const { SupervisorId, status } = req.body
        try {
            await SupervisorModel.findByIdAndUpdate(SupervisorId, {
                status
            })
            const Supervisor = await SupervisorModel.findById(SupervisorId)
            resposeReturn(res, 200, { Supervisor, message: 'supervisor status update success' })
        } catch (error) {
            resposeReturn(res, 500, { error: error.message })
        }
    }

    get_active_supervisor = async (req, res) => {
        let { page, searchValue, parPage } = req.query
        page = parseInt(page)
        parPage = parseInt(parPage)

        const skipPage = parPage * (page - 1)

        try {
            if (searchValue) {
                const Supervisor = await SupervisorModel.find({
                    $text: { $search: searchValue },
                    status: 'active'
                }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })

                const totalSupervisor = await SupervisorModel.find({
                    $text: { $search: searchValue },
                    status: 'active'
                }).countDocuments()

                resposeReturn(res, 200, { totalSupervisor, Supervisor })
            } else {
                const Supervisor = await SupervisorModel.find({ status: 'active' }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalSupervisor = await SupervisorModel.find({ status: 'active' }).countDocuments()
                resposeReturn(res, 200, { totalSupervisor, Supervisor })
            }

        } catch (error) {
            console.log('active supervisor get ' + error.message)
        }
    }

    get_deactive_supervisor = async (req, res) => {
        let { page, searchValue, parPage } = req.query
        page = parseInt(page)
        parPage = parseInt(parPage)

        const skipPage = parPage * (page - 1)

        try {
            if (searchValue) {
                const Supervisor = await SupervisorModel.find({
                    $text: { $search: searchValue },
                    status: 'deactive'
                }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })

                const totalSupervisor = await SupervisorModel.find({
                    $text: { $search: searchValue },
                    status: 'deactive'
                }).countDocuments()

               resposeReturn(res, 200, { totalSupervisor, Supervisor })
            } else {
                const Supervisor = await SupervisorModel.find({ status: 'deactive' }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalSupervisor = await SupervisorModel.find({ status: 'deactive' }).countDocuments()
                resposeReturn(res, 200, { totalSupervisor, Supervisor })
            }

        } catch (error) {
            console.log('active supervisor get ' + error.message)
        }
    }
}

module.exports = new SupervisorController()