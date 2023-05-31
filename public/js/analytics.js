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
        /*data: [300, 50, 100, 80],*/
        backgroundColor: [
        'rgba(128, 254, 117, 1)',
        'rgba(255, 85, 105, 0.77)',
        'rgba(255, 249, 100, 0.77)',
        'rgba(120, 117, 254, 1)',
        'rgba(120, 117, 254, 1)',
        'rgb(235, 122, 52)',
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