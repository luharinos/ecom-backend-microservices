// auth-service/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Connections
const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost:27017/auth-service', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
	res.send('Authentication Service');
});

app.listen(PORT, () => {
	console.log(`Authentication Service running on port ${PORT}`);
});
