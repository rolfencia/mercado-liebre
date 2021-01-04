const express = require('express');
const app = express();
app.use(express.static('public'));

/* app.listen(3000, ()=>{
    console.log('Escribe localhost:3000 en tu navegador para ingresar');
}); */

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor Corriendo")
})

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});;

