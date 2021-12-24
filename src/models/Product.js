import { Model } from "./Model";

class Product extends Model {
    constructor() {
        super('products');
    }
}

export default new Product();