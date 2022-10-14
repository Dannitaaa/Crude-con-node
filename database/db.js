const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'us-east.connect.psdb.cloud',
    user: 'vtva93dj5irbwcoued20',
    password:'pscale_pw_TGIU080PaxEVNCMEbf0xmNeJ9ipiQfFChHvqWtgs6NG',
    database: 'crud_node_db'
})


conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es: '+error);
        return 
    }
    console.log('Conectado a la BD');
})

module.exports = conexion;