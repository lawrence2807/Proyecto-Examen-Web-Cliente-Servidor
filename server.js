const express = require('express');
const path = require('path');
const { log } = require('console');

const app = express();
const PORT = 3000;
const Notas = path.join(__dirname, 'Notas');

app.use(express.static(path.join(__dirname, 'Notas')));

app.use(express.static(Notas));

app.get('/', (req, res) =>{
    res.sendFile(path.join(Notas, 'Home.html'));
});

app.get('/Notas/Home.html', (req, res) => {
    console.log('Loading contactus us...');
    res.sendFile(path.join(Notas, '/Notas/Home.html'))

})

app.get('/Notas_cre', (req, res) => {
    console.log('Loading contactus us...');
    res.sendFile(path.join(Notas, 'Notas_cre.html'))

})

app.post('/Notas_cre', (req, res) => {
    console.info('Formulario de agregar nota enviado...\n');
    const { ID_NOTA, TITULO, CONTENIDO, FECHA_HORA, ETIQUETAS } = req.body;

    console.log('Datos del formulario recibidos:');
    console.log('ID_NOTA:', ID_NOTA);
    console.log('TITULO:', TITULO);
    console.log('CONTENIDO:', CONTENIDO);
    console.log('FECHA_HORA:', FECHA_HORA);
    console.log('ETIQUETAS:', ETIQUETAS);
    
    res.redirect('/');
});



app.listen(PORT, () => {
    console.info(`Server running at port ${PORT}`);
});


