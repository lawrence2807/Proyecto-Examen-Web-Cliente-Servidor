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

app.get('/Notas/Home', (req, res) => {
    console.log('Loading contactus us...');
    res.sendFile(path.join(PUBLIC, '/Notas/Home.html'))

})

app.get('/Notas/Notas_cre', (req, res) =>{
    res.sendFile(path.join(Notas, 'Notas_cre.html'));
});

app.get('/Notas/Notas_cre.html', (req, res) => {
    console.log('Loading contactus us...');
    res.sendFile(path.join(PUBLIC, '/Notas/Notas_cre.html'))

})

app.post('/Notas/Notas_cre', (req, res) => {
    console.info('Contact Us has been called...\n');
    const ID_NOTA = req.body.ID_NOTA;
    const email = req.body.email;
    const subject = req.body. subject;

    console.log('Form data\n');
    console.log('ID_NOTA: ' + ID_NOTA);
    console.log('TITULO: ' + TITULO);
    console.log('CONTENIDO: ' + CONTENIDO);
    console.log('FECHA_HORA: ' + FECHA_HORA);
    res.redirect('/');
});


app.listen(PORT, () => {
    console.info(`Server running at port ${PORT}`);
});


