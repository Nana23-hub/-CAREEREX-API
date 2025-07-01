const dotenv = require('dotenv');
dotenv.config();
const express = require ('express');
const mongoose = require ('mongoose');
const router = require('./routes/items.js');
const app = express()

app.use(express.json());

const PORT = process.env.PORT || 6000




console.log('MONGODB_URL:', process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            
            
        });
    })

app.use('/api', router);
//ayooladele1234
//aishatcareerexproject