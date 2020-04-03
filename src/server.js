const server = require('express');
const cors = require('cors');
const app = server();

const SELECT_ALL_NOMES_QUERY = ('SELECT * FROM `hermes_tb` WHERE 1');

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'cpl08.main-hosting.eu',
  user     : 'artsyste_netto',
  password : 'Z}1K1.klRh=G',
  database:  'artsyste_hermes'  
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

console.log(connection);

app.use(cors());

app.get('/', (req, res) =>{
    res.send('go to /yes to see', )
});

app.get('/hermes/add', (req, res) =>{
    const { name, title, note } = req.query;
    const INSERT_NAMES_NOTE = `INSERT INTO hermes_tb ( name, title, note) VALUES('${name}', '${title}','${note}')`
    connection.query(INSERT_NAMES_NOTE,(err, result) =>{
        if(err) {
            return res.send(err)
        }
        else{
            return res.send('sucesso adicionado')
        }

    })
});

app.get('/hermes', (req, res) =>{
    connection.query(SELECT_ALL_NOMES_QUERY,  (err, result, fields) => {
        if(err){            
            return res.send(err)    
        }
        else{
            return res.json({
                data: result                              
            })
        }
    });
});
const port = 3001;

app.listen(port, () => {
    console.log(`Server start on port ${port}`)
});

