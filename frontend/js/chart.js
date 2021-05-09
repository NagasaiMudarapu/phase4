google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart()
{
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'solvedcount');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Codeforces', 548],
        ['Leetcode', 30],
        ['Mentorpick', 155],
        ['Codechef', 327],
        ['Vjudge', 170]
    ]);
        
    var options = {'title':'Pie - Chart of Problems solved on Different Sites',
                'width':600,
                'height':500};

    var chart = new google.visualization.PieChart(document.getElementById('page'));
    chart.draw(data, options);
}
    