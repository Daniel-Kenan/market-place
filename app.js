const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Define a schema for your data
const productSchema = new mongoose.Schema({
  name: String,
  product_name: String,
  price: Number,
  product_image: String,
  category: String,
});

const Product = mongoose.model('Product', productSchema);

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  const { name, product_name, price, product_image, category } = req.body;

  const product = new Product({
    name,
    product_name,
    price,
    product_image,
    category,
  });

  product.save((err) => {
    if (err) {
      console.error(err);
      res.render('error', { error: err.message });
    } else {
      res.render('success', { name, product_name, price, product_image, category });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
