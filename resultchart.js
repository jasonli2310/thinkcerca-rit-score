var CHART = document.getElementById('lineChart');

var grade = 3
var withThinkCERCA = [10, 10, 10, 10]
var nationalAverage = [5, 6, 7, 8]


let lineChart = new Chart(CHART,
  {

      type: "bar",
      data: {
          labels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4"],
          datasets: [
              {
                label: "National Average Growth",
                backgroundColor:'#97bfef',
                borderColor: "#97bfef",
                borderWidth: 1,
                data: nationalAverage,
              },
              {
                label: "Growth with ThinkCERCA",
                backgroundColor: '#307fe2',
                borderColor: "#333F48",
                borderWidth: 1,
                categoryPercentage: 0.8,
                barPercentage: 0.9,
                data: withThinkCERCA,
              }]
            },

      options:
            {
              scales:{
                yAxes:[{
                  ticks:{
                    beginAtZero: false,
                    max: 12,
                    min: 4,
                    stepSize: 2
                  }
                }]
              }
            }

  });



  let gradeChart = new Chart(CHART,
    {

        type: "bar",
        data: {
            labels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4"],
            datasets: [
                {
                  label: "National Average Growth",
                  backgroundColor:'#97bfef',
                  borderColor: "#97bfef",
                  borderWidth: 1,
                  data: nationalAverage,
                },
                {
                  label: "Growth with ThinkCERCA",
                  backgroundColor: '#307fe2',
                  borderColor: "#333F48",
                  borderWidth: 1,
                  categoryPercentage: 0.8,
                  barPercentage: 0.9,
                  data: withThinkCERCA,
                }]
              },

        options:
              {
                scales:{
                  yAxes:[{
                    ticks:{
                      beginAtZero: false,
                      max: 12,
                      min: 4,
                      stepSize: 2
                      tickMarkLength: 10
                    }
                  }]
                }
              }

    });
