import Product from "../models/Product";
import User from "../models/User";

class ProductController {
    async index(request, response) {
        const products = await Product.find();

        return response.json(products);
    }

    async find(request, response) {
        const { id } = request.params;
        const result = await Product.find({ where: { id } });
        const product = result[0];

        if (!product)
            return response.status(400).json({ erro: 'Product not found!' });

        return response.json(product);
    }

    async create(request, response) {
        const { description, user_id } = request.body;

        if (!description)
            return response.status(400).json({ error: 'Product description can\'t be null' });

        if (user_id === null)
            return response.status(400).json({ error: 'User ID can\'t be null' });

        const result = await User.find({ where: { id: user_id } });
        const user = result[0];

        if (!user)
            return response.status(400).json({ erro: 'User not found!' });

        const product = await Product.create({ description, user_id });

        return response.status(201).json(product);
    }

    async update(request, response) {
        const { id } = request.params;
        const { description } = request.body;
        const result = await Product.find({ where: { id } });
        const product = result[0];

        if (!product)
            return response.status(400).json({ error: 'Product not found!' });

        if (!description)
            return response.status(400).json({ error: 'Product description can\'t be null' });

        await Product.update({ description }, { where: { id } });

        return response.status(204).send();
    }

    async delete(request, response) {
        const { id } = request.params;
        const result = await Product.find({ where: { id } });
        const product = result[0];

        if (!product)
            return response.status(400).json({ error: 'Product not found!' });

        await Product.delete({ where: { id } });
        return response.status(204).send();
    }
}

export default new ProductController();