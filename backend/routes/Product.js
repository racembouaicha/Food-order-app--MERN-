
const Product = require('../models/productModel')
const router = require('express').Router();

// create product 

router.post('/addProduct', async (req,res) => {
    const newProduct = new Product(req.body);
    try {
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

// delete product
router.delete('/delete/:id', async (req ,res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(product){
            await product.deleteOne();
            res.status(200).json('product deleted !')
        }
        else {
            res.status(400).json('product does not exist')
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// update product 

router.put('/update/:id', async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id);
        if(product){
            await product.updateOne(req.body)
            res.status(200).json('product updated !')
        }
        else {
            res.status(400).json('product does not exist')
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// get product

router.get('/:id', async (req ,res) =>{ 
    try {
        const product = await Product.findById(req.params.id);
        if(product){
            res.status(200).json(product)
        }
        else {
            res.status(400).json('product does not exist')
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// get all product 

router.get('/', async (req ,res) =>{
    try {
        const product = await Product.find();
        if(product){
            res.status(200).json(product)
        }
        else {
            res.status(400).json('product does not exist')
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router