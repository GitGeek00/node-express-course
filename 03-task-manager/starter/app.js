const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const tasks = require('./routes/tasks');
require('dotenv').config()
const notFound = require('./middleware/errorHandler');
const errorHandlerMiddleware = require('./middleware/not_found');

app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.connectionPort || 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
