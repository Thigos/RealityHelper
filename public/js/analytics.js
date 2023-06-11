const chartTokenContext = document.getElementById('chart-token');
const chartSentimentsContext = document.getElementById('chart-sentiments');

var chartTokenData = {
    labels: [
        /*'Red',
        'Blue',
        'Yellow',
        'Yellow',*/
    ],
    datasets: [{
        label: 'Vezes Usada',
        data: [],
        backgroundColor: [
        'rgb(128, 254, 117)',
        'rgb(255, 85, 105)',
        'rgb(255, 249, 100)',
        'rgb(120, 117, 254)',
        'rgb(252, 3, 240)',
        ],
        hoverOffset: 4
    }]
};

const configTokenChart = {
    type: 'doughnut',
    data: chartTokenData,
    options: {
        borderWidth: 0,
    }
}

var chartToken = new Chart(chartTokenContext, configTokenChart);

var chartSentimentData = {
    labels: [],
    datasets: [{
        label: 'Sentimentos',
        data: [],
        backgroundColor: 'rgba(217, 217, 217, 1)',
        borderRadius: 10,
    }]
}

const configSentimentChart = {
    type: 'bar',
    data: chartSentimentData,
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        weight: 700
                    }
                }
            }
        }
    }
}

var chartSentiment = new Chart(chartSentimentsContext, configSentimentChart);
