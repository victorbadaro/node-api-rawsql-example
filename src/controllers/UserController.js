import User from '../models/User';

class UserController {
    async index(request, response) {
        const users = await User.find();

        return response.json(users);
    }

    async create(request, response) {
        const { name, email } = req.body;
    }

    async update(request, response) {
        const { id } = req.params;
        const { name, email } = req.body;
    }

    async delete(request, response) {
        const { id } = req.params;
    }
}

export default new UserController();