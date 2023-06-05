import express from 'express';
import * as url from 'url';
import hbs from 'hbs';
import dotenv from 'dotenv';

const root = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config()
const app = express();
const port = process.env.PORT;

hbs.registerPartials( root + '/views/partials' );
// TODO: import 'hbs
app.set('view engine', 'hbs');

// Servir contenido estático
app.use( express.static('public') );

app.get( '/', ( req, res ) => {
    res.render( 'home', {
        nombre: 'Luis Rico',
        titulo: 'Curso de Node'
    });
});

app.get( '/generic', ( req, res ) => {
    res.render( 'generic', {
        nombre: 'Luis Rico',
        titulo: 'Curso de Node'
    });
});

app.get( '/elements', ( req, res ) => {
    res.render( 'elements', {
        nombre: 'Luis Rico',
        titulo: 'Curso de Node'
    });
});

app.get( '/generic', ( req, res ) => {
    res.sendFile( root + '/public/generic.html' );
});

app.get( '/', ( req, res ) => {
    res.sendFile( root + '/public/elements.html' );
});

app.get( '*', ( req, res ) => {
    res.sendFile( root + '/public/404.html' );
});

app.listen( port, () => {
    console.log( `Example app listening at http://localhost:${ port }` );
});