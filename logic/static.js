var first = true,
    second = false,
    third = false;

google.charts.load('current', {packages: ['corechart','line']});

$.get("../views/staticTabs/first.html", function(data){
    $("#content").append(data);
    google.charts.setOnLoadCallback(drawChartWeek);
});
function changeTab(tabNumber) {
    if(tabNumber === 1 && !first){
        second = false;
        first = true;
        third = false;
        $("#month-tab").remove();
        $("#total-tab").remove();
        $.get("../views/staticTabs/first.html", function(data){
            $("#content").append(data);
            console.log("LOL")
            drawChartWeek();
        });
    }
    if(tabNumber === 2 && !second){
        second = true;
        first = false;
        third = false;
        $("#week-tab").remove();
        $("#total-tab").remove();
        $.get("../views/staticTabs/second.html", function(data){
            $("#content").append(data);
            google.charts.setOnLoadCallback(drawChartMonth);
        });
    }
    if(tabNumber === 3 && !third){
        second = false;
        first = false;
        third = true;
        $("#week-tab").remove();
        $("#month-tab").remove();
        $.get("../views/staticTabs/third.html", function(data){
            $("#content").append(data);
            google.charts.setOnLoadCallback(drawChartTotal);
        });
    }
}

function drawChartMonth() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
    data.addColumn('number', 'Percentage');
    data.addRows([
        ['Papel', 0.54],
        ['Plastico', 0.11],
        ['Metal', 0.11],
        ['Organico', 0.10],
        ['Otros', 0.15]
    ]);

    var options = {
        title: 'Residuos este mes',
        is3D: true,
        legend: {position: 'none'}
    };
    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
    chart.draw(data, options);
}

function drawChartWeek() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Dia');
    data.addColumn('number', 'Papel');
    data.addColumn('number', 'Plastico');
    data.addColumn('number', 'Metal');
    data.addColumn('number', 'Organico');
    data.addColumn('number', 'Otro');


    data.addRows([
        ["L",  37.8, 80.8, 41.8,37.8, 80.8],
        ["M",  30.9, 69.5, 32.4,57, 25.7],
        ["W",  25.4,   57, 25.7,30.9, 69.5],
        ["J",  11.7, 18.8, 10.5,25.4,   57],
        ["V",  11.9, 17.6, 10.4,11.7, 18.8],
        ["S",   8.8, 13.6,  7.7,25.4,   57],
        ["D",   7.6, 12.3,  9.6,37.8, 80.8]
    ]);



    var options = {
        chart: {
            title: 'Residuos de esta semana',
            subtitle: 'en unidades de basura'
        },
        legend: {position: 'none'}
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, options);
}