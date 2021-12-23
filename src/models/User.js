import { connection as database } from '../config/database';

class User {
    async find() {
        const query = 'SELECT * FROM users';
        const result = await database.query(query);
        const users = result.rows;

        return users;
    }

    async create() {

    }

    async update() {

    }

    async delete() {

    }
}

export default new User();