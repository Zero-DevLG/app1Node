const fs = require('fs');
const colors = require('colors');
const crearArchivo = ( base = 5,l,m)=>{
    return new Promise((resolve,reject)=>{
        console.clear(); 
      
        let salida = '';
        
        for(let i= 1; i<=m;i++){
            salida += `${base} x ${i} = ${ base * i }\n`;
        }
        if(l == true){
            console.log('================='.yellow);
            console.log(`Tabla del  ${base}`.bgMagenta);
            console.log('================='.yellow);
            console.log(`${ salida }`.cyan);
        }
       
    
        fs.writeFile(`./output/tabla-${ base }.txt`,salida,(err)=>{
            if(err) throw err;
    
            resolve(`tabla-${ base }.txt`);
        })
    })
   
}

module.exports = {
    crearArchivo
}