const express = require('express')
const app = express()
const port = process.env.port || 5000;
const cors = require('cors')

//middleware
app.use(cors());
app.use(express.json());

//mongodb13decx

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})