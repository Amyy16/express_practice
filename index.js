const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000


const app = express();

app.listen(PORT, (req, res) => {
    console.log(`app is running on ${PORT}`)
})