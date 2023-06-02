class DataLoader {
    realitys(dados) {
        var countColumns = 0;
        
        dados.forEach((stories, pos) => {
            var cell = document.createElement('div');
            cell.className = 'cell';

            cell.innerText = stories['textStories'];
            cell.dataset.id = stories['idStories'];
            cell.dataset.pos = pos;

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
    
    charts(dados){

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
}
