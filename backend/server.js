const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');  
const studentRoutes = require('./router/studentRoutes');
const logger = require('./middlewares/logger');
const app = express();


app.use(bodyParser.json());
dotenv.config();
app.use ('/api/Student', studentRoutes);
app.use(logger);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);


    
});