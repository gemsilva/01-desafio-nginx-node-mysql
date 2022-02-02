const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.get('/', (req,res) => {

    const connection  = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'senha01',
        database: 'nodedb'
    
    });
        
    connection.connect();
    const insertQuery = `INSERT INTO people (name) values ('GABRIEL')`;
    connection.query(insertQuery);
    var vHeader = '<h1>Code.Education - Node</h1>';
  
    var vBody = vHeader;

    connection.query(
        `select id,name from people`,
        function(err, result){
            if(err) throw err;
            connection.end();
            Object.keys(result).forEach(function(key) {
                vBody = vBody  + result[key].id + ' - ' + result[key].name + '</br>';       
            }) 
            res.send(vBody);

            console.log(vBody)
        }                
    );
});

app.listen(port, () => {
    console.log('Rodando na porta '+ port)
})