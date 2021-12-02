const midtransClient = require('midtrans-client');

const payment = async (req, res) => {
  // Create Snap API instance
  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  let parameter = {
    transaction_details: req.body,
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: 'diva',
      last_name: 'krishna',
      email: 'divakrishnam@gmail.com',
      phone: '082144361462',
    },
  };

  const transaction = await snap.createTransaction(parameter);

  res.json(transaction);
};

module.exports = payment;
