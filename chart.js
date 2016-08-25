var CHART = document.getElementById('lineChart');
let lineChart = new Chart(CHART,
  {

      type: "bar",
      data: {
          labels: ["Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11"],
          datasets: [
              {

                label: "National Average Growth",
                backgroundColor:'#97bfef',
                borderColor: "#97bfef",
                borderWidth: 1,
                data: [7.7, 6.1, 4.8, 3.8, 2.9, 1.7, 0.8, 0.1],


              },
              {

                label: "Growth with ThinkCERCA",
                backgroundColor: '#307fe2',
                borderColor: "#333F48",
                borderWidth: 1,
                data: [8.8, 8.7, 5.5, 6.3, 4.7, 2.6, 1.3, 0.16],

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

  // //
  // $('.submit-button').click(function() {
  //   //do something
  //   alert('hi!');
  // });

  });
