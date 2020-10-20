exports.seed = function (knex) {
  //Deletes all existing entries
  return knex('orders')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {
          buyer_id: '00ulthapbErVUwVJy4x6',
          organization_name: 'test_org',
          contact_name: 'Test001 User',
          contact_email: 'llama001@maildrop.cc',
          country: 'USA',
          bars_requested: 100,
          beneficiaries: 10,
          hygiene_description: 'Bad.',
        },
        {
          buyer_id: '00ulthapbErVUwVJy4x6',
          organization_name: 'test_org',
          contact_name: 'Test001 User',
          contact_email: 'llama001@maildrop.cc',
          country: 'USA',
          bars_requested: 50,
          beneficiaries: 5,
          hygiene_description: 'Bad.',
        },
        {
          buyer_id: '00ulthapbErVUwVJy4x6',
          organization_name: 'test_org',
          contact_name: 'Test001 User',
          contact_email: 'llama001@maildrop.cc',
          country: 'USA',
          bars_requested: 200,
          beneficiaries: 20,
          hygiene_description: 'Bad.',
        },
      ]);
    });
};
