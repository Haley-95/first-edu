/* 차트 로드 */
google.charts.load('current', { packages: ['corechart'] })

/* 차트 그리기 */
google.charts.setOnLoadCallback(drawStudentClassChart)
google.charts.setOnLoadCallback(drawStudentGenderChart)
google.charts.setOnLoadCallback(drawStudentSchoolChart)
google.charts.setOnLoadCallback(drawStudentGradeChart)

/* 강의별 학생 현황 차트 */
function drawStudentClassChart() {
  var data = google.visualization.arrayToDataTable([
    ['Class', 'Count'],
    ['1학년초급영어', 5],
    ['', 0],
    ['1학년초급영어', 5],
    ['', 0],
    ['1학년초급영어', 7],
    ['', 0],
    ['1학년초급영어', 6],
    ['', 0],
    ['1학년초급영어', 6],
    ['', 0],
    ['1학년초급영어', 6],
    ['', 0],
    ['1학년초급영어', 6],
    ['', 0],
    ['1학년초급영어', 6],
    ['', 0],
    ['1학년초급영어', 6],
    ['', 0],
    ['1학년초급영어', 6],
    ['', 0],
    ['1학년초급영어', 6],
    ['', 0],
    ['1학년초급영어', 6],
  ])

  var options = {
    bar: { groupWidth: '70%' },
    chartArea: { width: '300', height: '100%' },
    legend: 'none',
    colors: ['#fbb140'],
    animation: {
      startup: true,
      duration: 1000,
      easing: 'out',
    },
    annotations: {},
  }

  var chart = new google.visualization.BarChart(
    document.getElementById('studentClass')
  )
  chart.draw(data, options)
}

/* 학생 성별 분포 */
function drawStudentGenderChart() {
  var data = google.visualization.arrayToDataTable([
    ['Gender', 'count'],
    ['여', 8],
    ['남', 8],
  ])

  var options = {
    pieHole: 0.3,
    chartArea: { left: 10, top: 10, width: '100%', height: '100%' },
    colors: ['#39f', '#11cdef'],
    animation: {
      startup: true,
      duration: 1000,
      easing: 'out',
    },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('studentGender')
  )
  chart.draw(data, options)
}

/* 학교별 학생 분포 */
function drawStudentSchoolChart() {
  var data = google.visualization.arrayToDataTable([
    ['School', 'Count'],
    ['제일고', 5],
    ['반포고', 7],
    ['서초고', 6],
    ['양재고', 6],
  ])
  var options = {
    pieHole: 0.3,
    chartArea: { left: 10, top: 10, width: '100%', height: '100%' },
    colors: ['#1b47b1', '#006ccb', '#39f', '#11cdef'],
    animation: {
      startup: true,
      duration: 1000,
      easing: 'out',
    },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('studentSchool')
  )
  chart.draw(data, options)
}

/* 학년별 학생 분포 */
function drawStudentGradeChart() {
  var data = google.visualization.arrayToDataTable([
    ['Grade', 'Count'],
    ['고1', 5],
    ['고2', 7],
    ['고3', 6],
  ])
  var options = {
    pieHole: 0.3,
    chartArea: { left: 10, top: 10, width: '100%', height: '100%' },
    colors: ['#11cdef', '#39f', '#006ccb'],
    animation: {
      startup: true,
      duration: 1000,
      easing: 'out',
    },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('studentGrade')
  )
  chart.draw(data, options)
}
