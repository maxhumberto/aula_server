const http = require('http');
const express = require('express');
const bodyParser = require ('body-parser');
let contador=3

const app = express();
const porta = 3000;
app.set('port', porta);
app.use(bodyParser.json());
app.get("/teste", (req, resp, next) => {
    resp.send("olá, estou aqui");
});

const clientes = [
    {
    id:1,
    nome:'jose',
    email: 'jose@email.com.br'    
    },
    {
    id:2,
    nome:'Ana',
    email:'ana@email.com.br'    
    }   
    
]

app.get('/clientes', (req, res, next) =>{
    res.json(clientes);

})

app.post('/clientes', (req, res, next)=>{
    const cliente = req.body; 
    clientes.push({id: contador+=1, nome: cliente.nome, email:cliente.email});
    console.log(clientes);
    //res.end();
    res.status(201).json(clientes);

})

const server = http.createServer(app);
server.listen(porta);

