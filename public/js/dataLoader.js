const realitysContainer = document.getElementById('realitys-container');

class DataLoader {
    realitys(dados) {
        var countColumns = 1;
        var column = document.createElement('div');
        column.style.left = '0%';
        column.className = 'column';

        dados.forEach((stories, pos) => {
            var cell = document.createElement('div');
            cell.className = 'cell';

            cell.innerText = stories['textStories'];
            cell.dataset.id = stories['idStories'];
            cell.dataset.pos = pos;

            column.appendChild(cell);

            if((pos+1)%2 == 0 || pos == (dados.length-1)){
                realitysContainer.appendChild(column);
                column = document.createElement('div');
                column.className = 'column';
                column.style.left = (100*countColumns) + '%';
                countColumns++;
            }
        });
    }

    charts(dados){

    }
}