const express = require('express')
const app = express()



const port = proces.env.PORT || 3000


app.listen(port, () => (
    console.log(`server is running on port :${port}`)
))