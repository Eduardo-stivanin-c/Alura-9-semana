//impordo bitanblioteca  chalk from "chalk"
//const chalk=require('chalk');
//require esta sendo abadonado
//abbrir arquvio d bloco de código e Blocao de Notas estilo cat(DOS/Windows) ou type(Bash/Linux/Macintosh)  não tprecisa instalar
import fs from 'fs';
//Chalk munda cor do texto do console ,precisa instalar-lo 
import chalk from "chalk";



function extraiLinks(texto) {
   
    const regex=/\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas=[...texto.matchAll(regex)];

const resultados=capturas.map(captura =>
    ({    
            [captura[1]]:captura[2]}),    
)
return (resultados.length !==0 ?  resultados : "Não há links no arquivos");
//console.log(capturas);
};

//extraiLinks(textoTeste);

function trataErro(erro) {
    //trando o errosnatela não sei se tem ahaver com psegurança contra ckcekr os ou não 

    console.log(erro);

    throw new Error(chalk.red(erro.code, 'não há arquivos no diretório'));

}

//promise com then
//asyny/awaitn  'promessa' 

async function pegaArquivo(caminhodoArquivo) {//tratar erros com try(tentar) e  cath

    try {

        const encoding = "utf-8"

        const texto = await fs.promises.readFile(caminhodoArquivo, encoding)


        return extraiLinks(texto);

    }
    catch (erro) {
        trataErro(erro);

    }
}

export default pegaArquivo;

//async diz "cumpra a promessa" feita
//await é "eu prometo" no Javascript
//pegaArquivo('./arquivos/texto.md');
//pegaArquivo('./arquivos/');
/*function pegaArquivo(caminhoDoArquivo){
 const encoding='utf-8';
 //função assincorno é qaquele que não paa tudoatesperadno uma resposta j´´a asincornoma sim
 fs.promises
.readFile(caminhoDoArquivo,encoding)
.then((texto) => console.log(chalk.green(texto)))
.catch(trataErro)
}*/
/*
console.log(chalk.blue('olá mundo'));
console.log("olá mundo");
*///requer instalação da bibl0ioteca //