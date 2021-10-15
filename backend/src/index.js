
const express = require('express'); 

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./controllers/authController')(app);
require('./controllers/projectsControllers')(app);
app.listen(3333);