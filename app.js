const express = require('express')

const app = express()

const ProductRoute = require('./Routes/Product.route')
app.use('/products', ProductRoute)

app.use((req, res, next) => {
   const err = new Error("Not found")
   err.status = 404
   next(err)
})

// Error Handler

app.use((err, req, res, next) => {
   res.status(err.status || 500)
   res.send({
       error: {
           status: err.status || 500,
           message: err.message
       }
   })
})


app.listen(3000, () => {
    console.log('Server started on port 3000.....')
})