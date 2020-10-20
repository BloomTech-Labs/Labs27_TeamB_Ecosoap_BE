const db = require('../../data/db-config');

const findAll = async () => {
    return await db('orders')
}

const create = async (order) => {
    return db('orders').insert(order).returning('*'); 
}

const createOrder = async (orderObj) => {
    return await create(orderObj).then((newOrder) => {
        return newOrder ? newOrder[0] : newOrder; 
    }); 
}
module.exports = {
    findAll,
    createOrder,
}