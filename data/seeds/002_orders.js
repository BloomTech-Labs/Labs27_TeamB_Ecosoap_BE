const faker = require('faker');

const orders = [...new Array(3)].map((i, idx) => ({
  id: idx === 0 ? '00ulthapbErVUwVJy4x6' : faker.random.alphaNumeric(20),
}));

exports.seed = function (knex) {
  //Deletes all existing entries
  return knex('orders')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert(orders);
    });
};
