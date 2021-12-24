import { connection as database } from '../config/database';

class Product {
    async find(filters) {
        let query = 'SELECT * FROM products';

        if (filters)
            Object.keys(filters).forEach(filter => {
                query += ` ${filter}`;

                Object.keys(filters[filter]).forEach(field => {
                    if (filters[filter][field] !== null)
                        query += ` ${field} = '${filters[filter][field]}'`;
                    else
                        query += ` ${field} = null`;
                });
            });

        const result = await database.query(query);
        const products = result.rows;

        return products;
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

        const query = `INSERT INTO products (${fields.join(', ')}) VALUES (${values.join(', ')}) RETURNING *`;
        const result = await database.query(query);
        const user = result.rows[0];

        return user;
    }

    async update(data, filters) {
        const fieldsToUpdate = [];

        Object.keys(data).forEach(field => {
            fieldsToUpdate.push(`${field} = '${data[field]}'`);
        });

        let query = `UPDATE products SET ${fieldsToUpdate.join(', ')}`;

        if (filters)
            Object.keys(filters).forEach(filter => {
                query += ` ${filter.toUpperCase()}`;

                Object.keys(filters[filter]).forEach(field => {
                    if (filters[filter][field] !== null)
                        query += ` ${field} = '${filters[filter][field]}'`;
                    else
                        query += ` ${field} = null`;
                });
            });

        await database.query(query);
        return;
    }

    async delete(filters) {
        let query = 'DELETE FROM products';

        if (filters)
            Object.keys(filters).forEach(filter => {
                query += ` ${filter.toUpperCase()}`;

                Object.keys(filters[filter]).forEach(field => {
                    if (filters[filter][field] !== null)
                        query += ` ${field} = '${filters[filter][field]}'`;
                    else
                        query += ` ${field} = null`;
                });
            });

        await database.query(query);
        return;
    }
}

export default new Product();