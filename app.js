require('dotenv').config();
const express = require('express');
const app = express();

const payment = require('./controllers/payment');

app.use(express.static('public'));
app.use(express.json());

app.post('/pay', payment);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
