// const express = require('express')
// const logger = require('morgan')
// const cors = require('cors')
// require('dotenv').config()

// const app = express

// const { connectMongo } = require('./db/connections')

// const contactsRouter = require('./routes/api/contacts')

// const PORT = process.env.PORT || 3000

// const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

// app.use(logger(formatsLogger))
// app.use(cors())
// app.use(express.json())

// app.use('/api/contacts', contactsRouter)
// app.use((error, req, res, next) => {
//   res.status(500).json({ message: error.message })
// })

// const start = async () => {
//   try {
//     await connectMongo();
//     app.listen(PORT, (err) => {
//       if (err) console.error(`Error at aserver launch: ${err}`)
//       console.log(`Server running. Use our API on port: ${PORT}`)
//     })
//   } catch (err) {
//     console.error(`Failed to connect`)
//   }
// }

// start()

const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config();

const contactsRouter = require('./routes/api/contacts')


const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  const {status = 500, message = "Server error"} = err;
  res.status(status).json({ message: err.message })
})

module.exports = app
