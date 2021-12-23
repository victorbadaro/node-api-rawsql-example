import User from '../models/User';

class UserController {
    async index(request, response) {
        const users = await User.find();

        return response.json(users);
    }

    async create(request, response) {
        const { name, email } = request.body;
        const user = await User.create({ name, email });

        return response.status(201).json(user);
    }

    async update(request, response) {
        const { id } = request.params;
        const { name, email } = request.body;
    }

    async delete(request, response) {
        const { id } = request.params;
    }
}

export default new UserController();