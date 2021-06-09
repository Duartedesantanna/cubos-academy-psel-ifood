function solucao(produtos) {
	const resultado = {
        totalTop: 0,
        percentual: 0
    };
    //let total = 0;
    //let top = 0;
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].preco > 10000){
            resultado.totalTop += produtos[i].preco;
        }
        resultado.percentual += produtos[i].preco;
    }
    resultado.percentual  = resultado.totalTop / resultado.percentual;
    console.log(resultado);
}