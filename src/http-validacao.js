//http-validacao.js
function extraiLink(arryLinks) {
    //loop 
return arryLinks.map((objetoLink) => Object.values(objetoLink).join());
    //loop pra pega somente os links numa unica matroiz o join juntas avariveas matrizes

    
}

//checa status se foir iencontrad ,ou naçao ,etc
async function checaStatus(listaURLs) {
    listaURLs.map(async (url) => {
        const response= await  fetch(url)
        return response.status
    })
}




//valida ção comandoa cli  caminho --valida
export function listaValidada(listaDeLinks) {
   const links= extraiLink(listaDeLinks);
   const status=checaStatus(links);
   console.log(status);
   return status;
}


//chamdno recuros de rerceiros do site do Node JS
//pedaço de coidogo do site do Node JS
/*const res =await  fetch('https://nodejs.org/api/documentation.json');
if (res.ok) {
    const data=await res.json();
    console.log(data);
}*/