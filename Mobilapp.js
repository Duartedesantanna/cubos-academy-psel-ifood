function solucao(tempo, distancia) {
    let custo;
	if(tempo < 5){
        custo = 600;
    }else if(tempo >=5 && tempo <= 60){
        custo = (tempo *100) + (distancia * 50);
    }else{
        if(distancia < 100){
            custo = distancia * 200;
        }else{
            custo = distancia * 150;
        }
    }
    console.log(custo);
}