const app = require('./api/app.js');

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY
// const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv')
// }

// console.log(stripeSecretKey, stripePublicKey)

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
app.timeout = 60 * 10 * 1000;
