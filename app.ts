import express from "express"
import bodyParser from "body-parser"
import auth from './routes/auth'
import register from './routes/register';
import hacerpedido from './routes/hacerpedido';
import vermenues from './routes/vermenues';
import mispedidos from './routes/mispedidos'


const app = express().use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

app.use('/register', register);
app.use('/auth', auth);
app.use('/vermenues', vermenues);
app.use('/hacerpedido', hacerpedido);
app.use('/mispedidos', mispedidos);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () =>{
    console.log("Servidor ejecutandose en el puerto: ", PORT)
}).on("error", (error) =>{
    throw new Error(error.message);
})