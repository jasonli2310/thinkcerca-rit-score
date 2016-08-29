var CHART = document.getElementById('barChartAvg');
let barChartAvg = new Chart(CHART,
  {

      type: "bar",
      data: {
          labels: ["Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8"],
          datasets: [
              {

                label: "National Average Growth",
                backgroundColor:'#97bfef',
                borderColor: "#97bfef",
                borderWidth: 1,
                data: [7.7, 6.1, 4.8, 3.8, 2.9],


              },
              {

                label: "Growth with ThinkCERCA",
                backgroundColor: '#307fe2',
                borderColor: "#333F48",
                borderWidth: 1,
                data: [8.8, 8.7, 5.5, 6.3, 4.7],

              }]
            },

      options:
            {
              scales:{
                yAxes:[{
                  ticks:{

                    max: 12,
                    min: 0,
                    stepSize: 2
                  }
                }]
              }
            }
  });


  var CHART = document.getElementById('barChartReading');
  let barChartReading = new Chart(CHART,
    {

        type: "bar",
        data: {
            labels: ["Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8"],
            datasets: [
                {

                  label: "National Average Growth",
                  backgroundColor:'#97bfef',
                  borderColor: "#97bfef",
                  borderWidth: 1,
                  data: [7.7, 6.1, 4.8, 3.8, 2.9],

                },
                {

                  label: "Growth with ThinkCERCA",
                  backgroundColor: '#307fe2',
                  borderColor: "#333F48",
                  borderWidth: 1,
                  data: [8.8, 8.7, 5.5, 6.3, 4.7],

                }]
              },

        options:
              {
                scales:{
                  yAxes:[{
                    ticks:{

                      max: 12,
                      min: 0,
                      stepSize: 2
                    }
                  }]
                }
              }
    });
