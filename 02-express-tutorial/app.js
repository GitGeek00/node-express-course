const express = require('express')
const app = express()
const { products } = require("./data")
const peopleRouter = require("./routes/people")

const logger = (req, res, next) => {
    time = new Date()
    console.log(`Method: ${req.method} URL: ${req.url} Time: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
    next()
}

app.use('/', logger)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/api/v1/people", peopleRouter);

// app.use(express.static("./public"))

// app.get('/', logger, (req, res) => {
//     res.send('<h1>OK</h1>')
// })

app.get('/', (req, res) => {
    res.send('<h1>OK</h1>')
})

// app.get('/api/v1/people', (req, res) => {
//     res.status(200).json(people)
// })

// app.post('/api/v1/people', (req, res) => {
//     if (!req.body.name) {
//         return res.status(400).json({ success: false, message: "Please provide a name" });
//     }
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name });
// })


app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ message: "It worked!" });
})

app.get('/api/v1/products', (req, res) => {
    res.status(200).json(products);
})

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);
    if (product) {
        res.status(200).json(product)
    } else {
        res.status(404).send({ message: 'That product id: ' + req.params.productID + ' was not found.' })
    }
})

app.get('/api/v1/query', (req, res) => {

    const { search, limit, minPrice, maxPrice } = req.query

    let dataQuery = [...products]

    if (search) {
        dataQuery = dataQuery.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        dataQuery = dataQuery.slice(0, limit)
    }
    if (minPrice) {
        dataQuery = dataQuery.filter((product) => {
            return product.price >= minPrice && product.price <= maxPrice
        })
    }

    res.status(200).send(dataQuery)
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Not Found!</h1>')
})

app.listen(3000, () => console.log('Server listen to port 3000'))
