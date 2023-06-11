class DataLoader {
    realitys(dados) {
        var countColumns = 0;
        
        dados.forEach((stories, pos) => {
            var sentiment = document.createElement('div');
            sentiment.innerHTML = `
                <span title='Sentimento Positivo' class="material-symbols-rounded">sentiment_satisfied</span><p>${(stories['pos']*100).toFixed(1)}%</p>
                <span title='Sentimento Neutro' class="material-symbols-rounded">sentiment_neutral</span><p>${(stories['neu']*100).toFixed(1)}%</p>
                <span title='Sentimento Negativo' class="material-symbols-rounded">sentiment_dissatisfied</span><p>${(stories['neg']*100).toFixed(1)}%</p>
            `;

            var cell = document.createElement('div');
            cell.className = 'cell';

            cell.innerHTML = `
                <p>${stories['textStories']}</p>
            `
            cell.dataset.id = stories['idStories'];
            cell.dataset.pos = pos;

            cell.appendChild(sentiment);

            var column = document.createElement('div');
            column.style.left = '0%';
            column.className = 'column';
            column.style.left = (100*countColumns) + '%';

            column.appendChild(cell);
            realitysContainer.appendChild(column);
            countColumns++;

            /* if((pos+1)%2 == 0 || pos == (dados.length-1)){
                realitysContainer.appendChild(column);
                column = document.createElement('div');
                column.className = 'column';
                column.style.left = (100*countColumns) + '%';
                countColumns++;
            } */
        });
    }
    
    chartToken(dados){

        dados.forEach((tag, pos)=>{
            var quant = tag['quant'];
            var word = tag['word'];

            chartToken.data.datasets[0].data.push(quant);
            chartToken.data.labels.push(word);

            tbAnalytics.getElementsByTagName('tr')[pos].children[0].innerText = word;
            tbAnalytics.getElementsByTagName('tr')[pos].children[1].innerText = quant + 'x';
        });

        chartToken.update();
    }


    chartSentiment(dados){
        var dados = dados[0];

        chartSentiment.data.datasets[0].data = dados;

        chartSentiment.update();

        tbAnalyticsSentiment.getElementsByTagName('tr')[0].children[1].innerText = dados['Positivo'] + 'x';
        tbAnalyticsSentiment.getElementsByTagName('tr')[1].children[1].innerText = dados['Neutro'] + 'x';
        tbAnalyticsSentiment.getElementsByTagName('tr')[2].children[1].innerText = dados['Negativo'] + 'x';
    }
}
