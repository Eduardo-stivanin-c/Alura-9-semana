// cli.js
//Created by Eduardo Stivanin Calvino in 29/11/2023
//criando um  comando do Node Js
//inpiirtnaod meu arquvio
import chalk from "chalk";
import fs from  'fs';

import pegaArquivo from "./index.js";
import { log } from "console";
 const caminho=process.argv;
 //o primiero camnihoa apontoa prra 1 comanenste do Nojes Js e o segubdo aponta pra este aquivo

 // o terceitor pé um texto passado
 
 //exigbe texto inserido comoa caminho nocomando 
 async function processaTexto(argumentos) {
    
    
     //se caminho é um arquivo
     if (fs.lstatSync(caminho).isFile()) {
         const resultado= await pegaArquivo(argumentos[2]);
         console.log( chalk.yellow('lista de links'),resultado);
    
}
//senão se caminho é diferetorio
else if(fs.lstatSync(caminho).isDirectory()){
const arquivos= await fs.promises.readdir(caminho)
console.log(arquivos);

}
 }
 

processaTexto(caminho);