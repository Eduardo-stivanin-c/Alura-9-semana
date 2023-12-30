//http-validacao.js
function extraiLink(arryLinks) {
    //loop 
return arryLinks.map((objetoLink) => Object.values(objetoLink).join());
    //loop pra pega somente os links numa unica matroiz o join juntas avariveas matrizes
    
}

//valida ção comandoa cli  caminho --valida


export function listaValidada(listaDeLinks) {
    return extraiLink(listaDeLinks);
}
