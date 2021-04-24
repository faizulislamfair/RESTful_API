const { response } = require('express')
const express = require('express')
const router = express.Router()

const Product = require('../Models/Product.model')

// Get a list of all products
router.get('/', async (req, res, next) => {
    try {
        const results = await Product.find({}, {__v: 0})
        // const results = await Product.find({}, { name: 1, price: 1, _id: 0})
        // const results = await Product.find({price: 699}, {});
        res.send(results);
    } catch (error) {
        console.log(error.message)
    }
})


// Create a new product
router.post('/', async (req, res, next) => {

    try {
        const product = new Product(req.body)
        const result = await product.save()
        res.send(result)
    } catch (error) {
        console.log(error.message);
    }


    // const product = new Product({
    //     name: req.body.name,
    //     price: req.body.price
    // })
    // product.save()
    // .then(result => {
    //     console.log(result);
    //     res.send(result);
    // })
    // .catch(err => {
    //     console.log(err.message);
    // })
})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id)
        // const product = await Product.findOne({ _id: id })
        res.send(product)
    } catch (error) {
        console.log(error.message)
    }
})

router.patch('/:id', (req, res, next) => {
    res.send('Updating a single product')
})

router.delete('/:id', (req, res, next) => {
    res.send('Deleting a single product')
})

module.exports = router;