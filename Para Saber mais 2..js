async function pegaDados() {
//pegar dadso funcição Assincorniz ou seja´quenão para tudo até  esperar a responsata doarquvio
const resultadoConvertido=await fetch("https://api.github.com/users/omariosouto").then((res ) =>{ res.json })
    
    console.log(resultadoConvertido);
    
    }
  pegaDados()

const name="1sfr2d@gmail.com";

name.replace('@gmail.com','');



async function testeSimples() {
    return 'da um like ai';

}
testeSimples().then((resposta)=>{console.log(resposta)})


//https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?_gl=1*14n8em2*_ga*ODg0NzgyOTE1LjE3MDA2ODA2ODY.*_ga_1EPWSW3PCS*MTcwMDc0ODIzOS4zLjEuMTcwMDc0ODI1Ny4wLjAuMA..





