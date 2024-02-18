const express = require('express')
const cors = require('cors')
const app = express()

const itemRouter = require('./src/routes/itemRoutes')

app.use(cors())
app.use(express.json())

app.use('/item', itemRouter)

app.listen(3000, () => console.log('Aplikacja wystartowała port 3000'))
