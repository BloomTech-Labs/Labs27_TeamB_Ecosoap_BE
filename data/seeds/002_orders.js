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
          organization_website: 'www.faketestsite.com',
          contact_name: 'Test001 User',
          bars_requested: 100,
          contact_phone: '555-555-5555',
          contact_email: 'llama001@maildrop.cc',
          location: 'Austin, TX',
          country: 'USA',
          beneficiaries: 10,
          hygiene_description: 'Bad.',
          hygiene_initiative: 'Make it better.',
          comments: 'testing',
        },
        {
          buyer_id: '00ulthapbErVUwVJy4x6',
          organization_name: 'test_org',
          organization_website: 'www.faketestsite.com',
          contact_name: 'Test001 User',
          bars_requested: 50,
          contact_phone: '555-555-5555',
          contact_email: 'llama001@maildrop.cc',
          location: 'Austin, TX',
          country: 'USA',
          beneficiaries: 5,
          hygiene_description: 'Bad.',
          hygiene_initiative: 'Make it better.',
          comments: 'testing',
        },
        {
          buyer_id: '00ulthapbErVUwVJy4x6',
          organization_name: 'test_org',
          organization_website: 'www.faketestsite.com',
          contact_name: 'Test001 User',
          bars_requested: 200,
          contact_phone: '555-555-5555',
          contact_email: 'llama001@maildrop.cc',
          location: 'Austin, TX',
          country: 'USA',
          beneficiaries: 20,
          hygiene_description: 'Bad.',
          hygiene_initiative: 'Make it better.',
          comments: 'testing',
        },
      ]);
    });
};
