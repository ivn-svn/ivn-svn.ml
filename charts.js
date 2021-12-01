google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    //  N E W T E S T C O D E


    // N E W T E S T C O D E
    var data = google.visualization.arrayToDataTable([
        ['HTML', 'CSS', 'JS', 'XML'], //
        ['HTML', 25],
        ['CSS', 75],
        ['JS', 25],
        ['XML', 25]
    ]);

    var options = {
        'width': 250,
        'height': 250,
        pieHole: 0.5,
        pieStartAngle: 0.25,
//				
        
        pieSliceTextStyle: {
            color: 'black',
        },
        legend: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    google.visualization.events.addListener(chart, 'ready', function () {
        if (options.pieStartAngle < 30) {
            options.pieStartAngle++;
            options.width++;
            options.height++;
            setTimeout(function () {
                chart.draw(data, options);
            }, 1);
        }
    });
    chart.draw(data, options);
}