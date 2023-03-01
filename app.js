const express = require('express')
const app = express()
require('dotenv').config();


const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: proccess.env.SECRET,
    baseURL: proccess.env.BASE_URL,
    clientID: proccess.env.CLIENT_ID,
    issuerBaseURL: proccess.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));


const port = proces.env.PORT || 3000


app.listen(port, () => (
    console.log(`server is running on port :${port}`)
))