const db = require('mysql');

class Db {
    connect(){
        return db.createConnection({
            host     : 'cpl08.main-hosting.eu',
            user     : 'artsyste_netto',
            password : 'Z}1K1.klRh=G',
            database:  'artsyste_hermes'  
        }).them(conn => {
            this.conn = conn
        })
    }
}
console.log(Db.password);
module.exports = new Db()
