class ProductController {
    async index(request, response) {

    }

    async find(request, response) {
        const { id } = request.params;
    }

    async create(request, response) {
        const { description } = req.body;
    }

    async update(request, response) {
        const { id } = request.params;
        const { description } = req.body;
    }

    async delete(request, response) {
        const { id } = request.params;
    }
}

export default new ProductController();