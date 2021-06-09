function solucao(ano) {
    let tempo = ano - 2014;
	if(tempo % 4 == 0){
        console.log("COPA");
    }else if(tempo % 2 == 0){
        console.log("JOGOS");
    }else{
        console.log("MEH");
    }
}