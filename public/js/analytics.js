const chartContext = document.getElementById('chart-token');

var chartData = {
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

const config = {
    type: 'doughnut',
    data: chartData,
    options: {
        borderWidth: 0,
    }
}

var chartToken = new Chart(chartContext, config);