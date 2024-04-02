const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.post('/create', orderController.createOrder);
router.get('/:id', orderController.getOrders);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
