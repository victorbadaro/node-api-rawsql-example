import User from '../models/User';

class UserController {
    async index(request, response) {
        const users = await User.find();

        return response.json(users);
    }

    async create(request, response) {
        const { name, email } = request.body;
        const result = await User.find({ where: { email } });
        const userFoundByEmail = result[0];

        if (userFoundByEmail)
            return response.status(400).json({ error: 'Email already exists!' });

        const user = await User.create({ name, email });

        return response.status(201).json(user);
    }

    async update(request, response) {
        const { id } = request.params;
        const { name, email } = request.body;
        let result = await User.find({ where: { id: Number(id) } });
        const user = result[0];

        if (!user)
            return response.status(400).json({ error: 'User not found!' });

        result = await User.find({ where: { email } });
        const userFoundByEmail = result[0];

        if (userFoundByEmail && userFoundByEmail.id !== Number(id))
            return response.status(400).json({ error: 'Email already exists!' });

        await User.update({ name, email }, { where: { id } });

        return response.status(204).send();
    }

    async delete(request, response) {
        const { id } = request.params;
    }
}

export default new UserController();