async function buscaEndereco(cep) {
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro);
    }
}

    //aula 02
    // .then(resposta => resposta.json())
    //     .then(r => {
    //         if (r.erro) {
    //             throw Error('Esse cep não existe!');
    //         } else {
    //             console.log(r);
    //         }
    //     }).catch(erro => console.log(erro))
    //         .finally(mensagem => console.log('Processamento concluído!'));



//aula 04
// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// console.log(conjuntoCeps)
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));