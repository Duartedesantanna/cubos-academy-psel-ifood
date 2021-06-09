function solucao(letra, palavras) {
    let erros = 0;
	for(let item of palavras){
        if(item[0] !== letra){
            erros++;
        }
    }
    console.log(erros);
}