const TaskModel = require('../models/taskModel');
const { responseReturn } = require('../utiles/response');

class TaskController {
    async createTask(req, res) {
        try {
            const { title, description, email } = req.body;
            if (!title || !description) {
                return res.status(400).json({ error: "Title and description are required" });
            }
            const newTask = new TaskModel({
                title,
                description,
                email
            });

            const savedTask = await newTask.save();

            res.status(201).json(savedTask);
        } catch (error) {
            console.error("Error creating task:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async getTasks(req, res) {
        const { page = 1, searchValue, parPage = 10 } = req.query;
        const skipPage = parseInt(parPage) * (parseInt(page) - 1);
        try {
            let tasksQuery = { status: 'New' };
            if (searchValue) {
            }
            const tasks = await TaskModel.find(tasksQuery)
                                         .skip(skipPage)
                                         .limit(parPage)
                                         .sort({ createdAt: -1 });
            const totalTasks = await TaskModel.countDocuments(tasksQuery);
            responseReturn(res, 200, { totalTasks, tasks });
        } catch (error) {
            responseReturn(res, 500, { error: error.message });
        }
    }

    async getTaskById(req, res) {
        try {
            const taskId = req.params.id;
            const task = await TaskModel.findById(taskId);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.json(task);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
  }
  
  async updateTaskStatus(req, res) {
    try {
        const id = req.params.id;
        const status = req.params.status;
        const query = { _id: id };
        const update = { status: status };

        const updatedTask = await TaskModel.updateOne(query, update);

        if (updatedTask.nModified === 0) {
            return res.status(404).json({ status: "fail", message: "Task not found or status is already the same" });
        }

        res.status(200).json({ status: "success", data: updatedTask });
    } catch (error) {
        res.status(400).json({ status: "fail", data: error.message });
    }
  }

  async listTaskStatus(req, res) {
   
    try {
        const status = req.params.status;

        const data = await TaskModel.aggregate([
            {
                $match: { status: status }
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    description: 1,
                    status: 1,
                    createdDate: {
                        $dateToString: {
                            date: "$createdDate",
                            format: "%d-%m-%Y"
                        }
                    }
                }
            }
        ]);

        res.status(200).json({ status: "success", data: data });
    } catch (error) {
        res.status(400).json({ status: "fail", data: error.message });
    }
  }
  
  async deleteTask(req, res) {
    try {
      
        const id = req.params.id;
        const query = { _id: id };

        const deletedTask = await TaskModel.deleteOne(query);

        if (deletedTask.deletedCount === 0) {
            return res.status(404).json({ status: "fail", message: "Task not found" });
        }

        res.status(200).json({ status: "success", data: deletedTask });
    } catch (error) {
        res.status(400).json({ status: "fail", data: error.message });
    }
  }

  }

module.exports = new TaskController();

