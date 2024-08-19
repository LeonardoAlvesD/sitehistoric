function showStageResult(motorcycle) {
    let resultMessage = '';

    switch (motorcycle) {
        case 'bmw':
            resultMessage = 'A BMW começou com grande potência na largada, mas enfrentou dificuldades nas curvas sinuosas, mantendo-se competitiva apenas na reta final.';
            break;
        case 'honda':
            resultMessage = 'A Honda teve uma largada consistente e excelente desempenho nas curvas, mas não conseguiu acompanhar a velocidade máxima na reta final.';
            break;
        case 'yamaha':
            resultMessage = 'A Yamaha se destacou em todas as etapas: uma largada rápida, excelente controle nas curvas e uma aceleração final que garantiu a vitória!';
            break;
        case 'triumph':
            resultMessage = 'A Triumph teve um bom início e manteve uma performance sólida nas curvas, mas sua velocidade final não foi suficiente para superar os líderes.';
            break;
        default:
            resultMessage = 'Escolha uma marca para ver o desempenho em cada etapa da corrida!';
    }

    document.getElementById('result').textContent = resultMessage;
}
