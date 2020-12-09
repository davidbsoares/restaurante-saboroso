let conn = require('./db');

module.exports ={
    getMenus(){
        return new Promise((resolve, reject) =>{
            conn.query(`
                SELECT * FROM tb_menus ORDER BY title
            `, (err, results) => {
                if(err){
                console.log(err);
                }
                
                resolve(results);
            })
        })
    }
}