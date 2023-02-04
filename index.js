const express = require('express');
const app = express();
const dotenv = require('dotenv');
// const connectDB = require('./config/db');
const cors = require('cors');
const users = require('./user');

app.use(cors());
app.use(express.json());
dotenv.config();
// connectDB();

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.post('/api/register', (req, res) => {
    try {
        console.log(req.body)

        res.json(req.body);
    
    } catch (error) {
        
    }

}
)



let port = process.env.PORT || 3200;



console.log(port);
app.listen(port);
