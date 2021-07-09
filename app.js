const express = require("express");

const app = express ();
const path = require("path");


app.use(express.static(path.resolve(__dirname, "./public")));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.get('/registro', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/registro.html'));
});


app.listen(3000,()=>{
  console.log("servidor corriendo en el puerto 3000");

});