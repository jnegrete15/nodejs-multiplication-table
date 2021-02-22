const fs = require('fs');
require('colors');


const crearArchivo = async(base = 5, list = false, hasta = 10) => {

  try {
    

    let salida = '';
    let consola = '';

    for(let i = 1; i <= hasta; i++){
      salida += `${base} x ${i} = ${5*i}\n`
      consola += `${base} ${"x".cyan} ${i} ${"=".cyan} ${5*i}\n`
    }

    if(list){
      console.log("==================".rainbow);
      console.log(`   Tabla del ${base}`);
      console.log("==================".rainbow);
      console.log(consola)

    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)


    return `tabla-${base}.txt`
    
  }catch (err) {
    throw err
  }

  
}

module.exports = {
  crearArchivo
}
