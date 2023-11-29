// cli.js
//Created by Eduardo Stivanin Calvino in 29/11/2023
//criando um  comando do Node Js
//inpiirtnaod meu arquvio
import chalk from "chalk";

import pegaArquivo from "./index.js";
 const caminho=process.argv;
 //o primiero camnihoa apontoa prra 1 comanenste do Nojes Js e o segubdo aponta pra este aquivo

 // o terceitor pé um texto passado
 
 //exigbe texto inserido comoa caminho nocomando 
 async function processaTexto(caminho) {
    const resultado= await pegaArquivo(caminho[2]);
    console.log( chalk.yellow('lista de links'),resultado);
   
 }
 

processaTexto(caminho);