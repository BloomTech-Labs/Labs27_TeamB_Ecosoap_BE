// const { json } = require('express');
const express = require('express');
// const authRequired = require('../middleware/authRequired');
const router = express.Router();
const fetch = require('node-fetch');

// making a POST request to see if we can get a verification of price for desired quantity of soap.

router.post('/', (req, res) => {
  const { 
    organizationName,
    contactName,
    barsRequested,
    contactEmailAddress,
    country,
    beneficiaries,
  } = req.body; 
  // the fetch below queries to StakeHolder's API to return price
  // of requested bars of soap
  fetch('http://35.208.9.187:9192/web-api-2', {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
    {
    checkIfPrice(
    input: {
    organizationName: "${organizationName}", 
    contactName: "${contactName}",
    barsRequested:${barsRequested},
    contactEmailAddress: "${contactEmailAddress}",
    country: "${country}",
    beneficiaries: ${beneficiaries}
    }
    )
    {
    hasPrice
    price
    }
    }
    `,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.data.checkIfPrice,'the data from the call')

      // depending on what we get from the result, if we get 

      if (data.data.checkIfPrice.hasPrice === true) {
        // console.log('TRUEEEEEEEEEEEE')
        res
        .status(200)
          .json({
            data:data,
            message: `Your Order for quantity of ${barsRequested} bars of soap will be a total of $ ${data.data.checkIfPrice.price}`, 
          });
      }
    })
    .catch((err) => {
      res.status(400).json({Error: err.message }); 
    });
});
// issues with request above,
// Using template Strings we make the request to the GraphQL server with
// Single quotes , we must wrap the string in double quotes and then call upon the value
// that we want from our req.body and that is how we can correctly query for
// a user to complete the order form

module.exports = router; 
