// cli.js
//Created by Eduardo Stivanin Calvino in 29/11/2023
import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';
import  listaValidada  from './http-validacao.js';
const caminho = process.argv;

async function imprimeLista(valida,resultado,identificador='') {
    if (valida) {
        
        console.log(
          chalk.yellow('lista validada'),
          chalk.black.bgGreen(identificador),
       await  listaValidada(resultado)
         );
    }
else{
    console.log(
        chalk.yellow('lista de links'),
        chalk.black.bgGreen(identificador),
        resultado);
    }
// console.log(chalk.black.bgGreen(resultado,identificador))
//}
//texto preto grifado de verde

}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida=argumentos[3]==="--valida";
//tratanto erro
    try {
    fs.lstatSync(caminho);
} catch (erro) {
    if (erro.code ==='ENOENT') {
        console.log('Arquivo ou diretorio não existe');
        return;
    } 
}




    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        const valida=argumentos[3];
//console.log(valida)
        imprimeLista(valida,resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
            arquivos.forEach(async (nomeDeArquivo) => {
                const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
                imprimeLista(valida,lista,nomeDeArquivo);
            });
    }
}
 //o primeiro camihoa apontoa pra 1 comanenste do Noje Js e o segudo aponta pra este aquivo

 // o terceitor pé um texto passado
 
 //exige texto inserido comoa caminho no comando 

//await 
//se der ruinm volta esta lista ait processTexto
await processaTexto(caminho);