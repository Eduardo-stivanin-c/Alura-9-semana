//impordo bitanblioteca  chalk from "chalk"
//const chalk=require('chalk');
//require esta sendo abadonado

//abbrir arquvio d bloco de código e Blocao de Notas estilo cat(DOS/Windows) ou type(Bash/Linux/Macintosh)  não tprecisa instalar
import fs from 'fs';

//Chalk munda cor do texto do console ,precisa instalar-lo 
import chalk from "chalk";
//import { setUncaughtExceptionCaptureCallback } from 'process';
//import { log } from 'console';
//import { error } from 'console';
//const textoTeste ="São geralmente recuperados a partir de um objeto [FileList](http://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).";

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



/*function pegaArquivo(caminhoDoArquivo) {
    const encoding='utf-8'
    //desconsifddera o primiro pramentro que é o erro
    fs.readFile(caminhoDoArquivo,encoding,(erro,texto)=>{
        if (erro) {
            trataErro(erro);

        }
    console.log(chalk.green(texto))
}
    )

}*/


//\[[^[]*?]\]

// 
/*
console.log(chalk.blue('olá mundo'));
console.log("olá mundo");
console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).');/
console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).');
console.log('São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).');
*/
//requer instalação da bibl0ioteca //
