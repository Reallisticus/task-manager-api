const mongoose = require('mongoose')
const db = process.env.MONGODB_CONN

const connection = db

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})