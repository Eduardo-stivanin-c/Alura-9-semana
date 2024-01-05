import chalk from 'chalk';
//http-validacao.js
function extraiLink(arryLinks) {
    //loop 
return arryLinks.map((objetoLink) => Object.values(objetoLink).join());
    //loop pra pega somente os links numa unica matroiz o join juntas avariveas matrizes

    
}

//checa status se foir iencontrad ,ou naçao ,etc


async function checaStatus(listaURLs) {
    /*async*/
const arrStatus = await Promise
.all(

    
    listaURLs.map(   async (url) => {
        try {
            
            const response= await fetch(url);
            return response.status;
        } catch (erro) {
            return manejaErros(erro);

        }


}
))
return arrStatus;

}

function manejaErros(erro) {
    //alerta de erro em vermelho
  //  console.log(chalk.red('algo deu errado'),erro);
  if (erro.cause.code==="ENOTFOUND") {
    return  'link não encontrado';
  } else {
    return "ocorreu um erro"
  }
}

//valida ção comandoa cli  caminho --valida
export default async  function listaValidada(listaDeLinks) {

   // return extraiLink(listaDeLinks);

 const links=extraiLink(listaDeLinks);
const status=  await checaStatus(links);
//console.log(status);
return listaDeLinks.map((objeto,indice) => ({
    //... espalhamento
...objeto,
status:    status[indice]
})
);
}


//chamdno recuros de rerceiros do site do Node JS
//pedaço de coidogo do site do Node JS
/*const res =await  fetch('https://nodejs.org/api/documentation.json');
if (res.ok) {
    const data=await res.json();
    console.log(data);
}*/


//