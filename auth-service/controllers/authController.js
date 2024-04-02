const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
	try {
		// Hash password
		const hashedPassword = await bcrypt.hash(req.body.password, 10);

		// Create new user
		const user = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		});

		await user.save();
		res.status(201).json({ message: 'User registered successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}
};

exports.login = async (req, res) => {
	try {
		// Find user by email
		const user = await User.findOne({ email: req.body.email });

		// Check if user exists
		if (!user) {
			return res.status(400).json({ message: 'User not registered' });
		}

		// Validate password
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword) {
			return res.status(400).json({ message: 'Invalid credentials' });
		}

		// Generate JWT token
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: '1h',
		});

		res.json({ token });
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}
};
