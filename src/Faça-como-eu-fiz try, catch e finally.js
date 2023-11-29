/*async function pegaArquivo(caminhoDoArquivo) {
 const encoding = 'utf-8';
 try {
   const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
   console.log(chalk.green(texto))
 } catch(erro) {
   trataErro(erro);
 } finally {
   console.log(chalk.yellow('operação concluída'));
 }
}


*/
async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(chalk.green(texto))
    } catch(erro) {
      trataErro(erro);
    } finally {
      console.log(chalk.yellow('operação concluída'));
    }
   }