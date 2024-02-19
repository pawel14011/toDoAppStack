const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')
const itemRouter = require('./src/routes/itemRoutes')

app.use(cors())
app.use(express.json())
const abs = ()=>{
    console.log("jestem");
}

app.use('/item', itemRouter)
app.use('/item/abc', abs)




db.sequelize
    .sync()
    .then(()=>{
        app.listen(3000, () => console.log('Aplikacja wystartowała port 3000'))
    }).catch(err =>
        {
            console.log(err);
        })


