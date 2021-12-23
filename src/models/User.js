import { connection as database } from '../config/database';

class User {
    async find() {
        const query = 'SELECT * FROM users';
        const result = await database.query(query);
        const users = result.rows;

        return users;
    }

    async create(data) {
        const fields = [];
        const values = [];

        Object.keys(data).forEach(field => {
            fields.push(field);

            if (data[field] !== null) {
                if (Array.isArray(data[field])) {
                    const newArray = data[field].map(item => `'${item}'`);

                    values.push(`ARRAY[${newArray}]`);
                } else
                    values.push(`'${data[field]}'`);
            } else
                values.push('null');
        });

        const query = `INSERT INTO users (${fields.join(', ')}) VALUES (${values.join(', ')}) RETURNING *`;
        const result = await database.query(query);
        const user = result.rows[0];

        return user;
    }

    async update() {

    }

    async delete() {

    }
}

export default new User();