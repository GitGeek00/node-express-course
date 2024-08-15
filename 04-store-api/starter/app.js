// Express
const express = require('express');
const app = express();

// Define network connection function
const connectDB = require('./db/connect');

// Define 404 error
const notFoundErrMW = require('./middleware/not-found');

// Define other errors
require('express-async-errors');
const otherErrMW = require('./middleware/error-handler');

// Define product route function
const productsRouter = require('./routes/products')

// Define .env
require('dotenv').config();

// Define json function
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ok')
});

// Define products route middleware
app.use('/api/v1/products', productsRouter);

// Define error middleware
app.use(notFoundErrMW);
app.use(otherErrMW);

// Connect to DB and start application
const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening port ${port}...`)
        )
    } catch (error) {
        console.log(error);
    }
}

start();