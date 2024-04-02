// order-service/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// Connections
const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/order-service', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
	res.send('Order Service');
});

app.listen(PORT, () => {
	console.log(`Order Service running on port ${PORT}`);
});
