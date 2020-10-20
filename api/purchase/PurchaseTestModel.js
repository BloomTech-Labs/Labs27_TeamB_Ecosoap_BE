const db = require('../../data/db-config');

const findAll = async () => {
    return await db('orders')
}

module.exports = {
    findAll,
}