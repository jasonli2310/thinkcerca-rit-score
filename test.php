<?php

// $baserit = $_GET["baserit"] + 1;

$output = array();
exec("python sandbox.py ".$_GET["grade"]." ".$_GET["baserit"], $output);
// var_dump( $output);

?>

<html>
<body>

      <div style="width: 40%;">
        <canvas id="lineChart" width="100" height="50"></canvas>
      </div>
      <script src="Chart.min.js"></script>


  <script>
  var CHART = document.getElementById('lineChart');

  var grade = 3 ;
  var withThinkCERCA = <?php echo $output[0] ?>;
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

    </script>


    Welcome <?php echo $baserit; ?><br>
    Your email address is: <?php echo $_GET["baserit"]; ?>
    <?php echo "helloWorld"; ?>






</body>
</html>
