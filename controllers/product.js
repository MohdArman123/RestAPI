const Product = require('../models/product');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const newProduct = await product.save();
        res.status(201).json({ message: 'Product created successfully!', data: newProduct });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ data: products });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ data: product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product updated successfully!', data: updatedProduct });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};




// const Product = require('../models/product');

// // Create a new product
// const createProduct = async (req, res) => {
//     try {
//         const product = new Product(req.body);
//         const newProduct = await product.save();
//         res.status(201).json({message: 'Product created successfully!', data: newProduct});
//     } catch (err) {
//         res.status(400).json({message: err.message});
//     }
// };

// // Get all products
// const getProducts = async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.status(200).json({data: products});
//     } catch (err) {
//         res.status(400).json({message: err.message});
//     }
// };

// // Get a product by ID
// const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).json({message: 'Product not found'});
//         }
//         res.status(200).json({data: product});
//     } catch (err) {
//         res.status(400).json({message: err.message});
//     }
// };

// // Update a product
// const updateProduct = async (req, res) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
//         if (!updatedProduct) {
//             return res.status(404).json({message: 'Product not found'});
//         }
//         res.status(200).json({message: 'Product updated successfully!', data: updatedProduct});
//     } catch (err) {
//         res.status(400).json({message: err.message});
//     }
// };

// // Delete a product
// const deleteProduct = async (req, res) => {
//     try {
//         const product = await Product.findByIdAndDelete(req.params.id);
//         if (!product) {
//             return res.status(404).json({message: 'Product not found'});
//         }
//         res.status(200).json({message: 'Product deleted successfully'});
//     } catch (err) {
//         res.status(400).json({message: err.message});
//     }
// };

// module.exports = {
//     createProduct,
//     getProducts,
//     getProductById,
//     updateProduct,
//     deleteProduct
// };
