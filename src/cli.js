// cli.js
//Created by Eduardo Stivanin Calvino in 29/11/2023
import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';

const caminho = process.argv;

function imprimeLista(resultado,identificador='') {
  console.log(chalk.yellow('lista de links'), resultado)
 console.log(chalk.black.bgGreen(resultado,identificador))
//}
//texto preto grifado de verde

}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
//tratanto erro
    try {
    fs.lstatSync(caminho);
} catch (erro) {
    if (erro.code ==='ENOENT') {
        console.log('Arquivo ou diretorio inexitente');
        return
    } 
}
    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
            arquivos.forEach(async (nomeDeArquivo) => {
                const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
                imprimeLista(lista,nomeDeArquivo);
            })
    }
}
 //o primeiro camihoa apontoa pra 1 comanenste do Noje Js e o segudo aponta pra este aquivo

 // o terceitor pé um texto passado
 
 //exige texto inserido comoa caminho no comando 

await processaTexto(caminho);