// product-service/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Connections
const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/product-service', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
const productRoutes = require('./routes/productRoutes.js');
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
	res.send('Product Service');
});

app.listen(PORT, () => {
	console.log(`Product Service running on port ${PORT}`);
});
