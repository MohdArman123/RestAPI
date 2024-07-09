// const express = require('express');
// const router = express.Router();
// const productController = require('../controllers/product');
// const { authenticateAdminToken, authenticateToken } = require('../middleware/auth');

// // Create a new product (Admin only)
// router.post('/', authenticateAdminToken, productController.createProduct);

// // Get all products
// router.get('/', productController.getProducts);

// // Get a product by ID
// router.get('/:id', productController.getProductById);

// // Update a product (Admin only)
// router.put('/:id', authenticateAdminToken, productController.updateProduct);

// // Delete a product (Admin only)
// router.delete('/:id', authenticateAdminToken, productController.deleteProduct);

// module.exports = router;

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const { authenticateAdminToken, authenticateToken } = require('../middleware/auth');

// Create a new product (Admin only)
router.post('/', authenticateAdminToken, productController.createProduct);

// Get all products
router.get('/', productController.getProducts); // Note: getProducts is the function name in the controller

// Get a product by ID
router.get('/:id', productController.getProductById); // Note: getProductById is the function name in the controller

// Update a product (Admin only)
router.put('/:id', authenticateAdminToken, productController.updateProduct); // Note: updateProduct is the function name in the controller

// Delete a product (Admin only)
router.delete('/:id', authenticateAdminToken, productController.deleteProduct); // Note: deleteProduct is the function name in the controller

module.exports = router;

