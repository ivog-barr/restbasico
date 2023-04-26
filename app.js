require('dotenv').config();

const express  = require('express');
const cors = require('cors');

const app = express();



app.use(express.json());
app.use(cors());
app.use(express.static('public'));




app.use('/api/usuarios', require('./routes/user'));






app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo en puerto ' + process.env.PORT);

});