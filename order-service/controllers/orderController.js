const Order = require('../models/Order');

module.exports.createOrder = async (req, res) => {
	try {
		const order = new Order({
			products: req.body.products,
			userId: req.body.userId,
		});
		await order.save();

		res.status(201).json({ message: 'Order created successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}
};
module.exports.getOrders = async (req, res) => {
	try {
		const order = await Order.findById({ userId: req.params.id });
		if (!order) {
			return res.status(404).json({ message: 'Orders not found' });
		}

		res.json(order);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}
};
module.exports.updateOrder = async (req, res) => {
	try {
		const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});

		res.json(order);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}
};
module.exports.deleteOrder = async (req, res) => {
	try {
		const order = await Order.findByIdAndDelete(req.params.id);
		if (!order) {
			return res.status(404).json({ message: 'Order not found' });
		}

		res.json({ message: 'Order deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}
};
