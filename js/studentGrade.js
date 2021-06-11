google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Grade', 'Count'],
    ['고1', 5],
    ['고2', 7],
    ['고3', 6],
  ])

  var options = {
    // title: '학년별 분포',
    pieHole: 0.4,
    colors: ['#006ccb', '#39f', '#11cdef'],
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('studentGrade')
  )
  chart.draw(data, options)
}
