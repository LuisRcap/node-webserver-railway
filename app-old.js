import http from 'http';

http.createServer( ( req, res ) => {

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' );
    // res.writeHead(200, { 'Content-Type': 'application/csv' });
    
    res.write( 'Hola Mundo' );
    res.end();
})
.listen( 8081 );

console.log( 'Escuchando en el puerto', 8081 );