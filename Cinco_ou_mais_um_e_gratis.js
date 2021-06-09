function solucao(precos) {
    let total = 0;
    if(precos.length >=5){
        let menor = 0;
        for(let i = 0; i<precos.length; i++){
            if (precos[i] <= precos[menor]){
                menor = i;
            }
        }
        for(let i = 0; i<precos.length; i++){
            if(i != menor){
                total += precos[i];
            }
        }
        
    }else{
        for(let valor of precos){
            total += valor;
        }
    }
    console.log(total);
}