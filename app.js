const express = require('express')

const app = express()

const ProductRoute = require('./Routes/Product.route')
app.use('/products', ProductRoute)



app.listen(3000, () => {
    console.log('Server started on port 3000.....')
})