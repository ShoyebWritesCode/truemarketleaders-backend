const Chart = require('../models/chartsSchema');

exports.hello = async (req, res) => {
  res.json({ message: 'Hello world' });
};

exports.getAllTickers = async (req, res) => {
  try {
    const tickers = await Chart.findOne();
    res.json({ tickers });
  } catch (error) {
    console.error('Error retrieving tickers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
