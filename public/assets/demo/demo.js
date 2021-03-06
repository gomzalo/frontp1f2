const Http1 = new XMLHttpRequest();
  const url1='https://apiproyecto1ace2.herokuapp.com/api/datos';
  
  Http1.open("GET", url1);
  Http1.send();


  // Tabla de datos
  var datos_arr1 = [];
  // Arreglos 
  var id_arr = [];
  var peso_arr = [];
  var inclinacion_arr = [];
  var agua_arr = [];
  var luminosidad_arr = [];
  var sonido_arr = [];
  var ritmo_arr = [];
  var pasos_arr = [];

  var tam_arr = 0;
  Http1.onreadystatechange = (e) => {

      // console.log(Http.responseText);
      datos_arr1 = JSON.parse(Http1.responseText);
      console.log(datos_arr1);

      
      // console.log("datospos1");
      // console.log(datos_arr[0].peso);
      // var table_content = "";
      var l;
      for (l = datos_arr1.length-1; l > 0; l--) {
        // for (l = 0; l < datos_arr1.length; l) {
          // Llenando los arreglos
          id_arr.push(datos_arr1[l].id);
          // id_arr[l] = datos_arr1[l].id;
          inclinacion_arr.push(datos_arr1[l].inclinacion);
          // inclinacion_arr[l] = datos_arr1[l].inclinacion;
          peso_arr.push(datos_arr1[l].peso);
          // peso_arr[l] = datos_arr1[l].peso;
          agua_arr.push(datos_arr1[l].agua);
          // agua_arr[l] = datos_arr1[l].agua;
          luminosidad_arr.push(datos_arr1[l].luminosidad);
          // luminosidad_arr[l] = datos_arr1[l].luminosidad;
          sonido_arr.push(datos_arr1[l].sonido);
          // sonido_arr[l] = datos_arr1[l].sonido;
          ritmo_arr.push(datos_arr1[l].ritmo);
          // ritmo_arr[l] = datos_arr1[l].ritmo;
          pasos_arr.push(datos_arr1[l].pasos);
          // pasos_arr[l] = datos_arr1[l].pasos;
      }
      // document.getElementById("tabla").innerHTML = table_content;
       
  }
  // tam_arr = id_arr.length;
  // console.log("tam arr: "+peso_arr.length);
  console.log(peso_arr);
  // **************************   Usando arreglos de datos  **************************
 console.log("arreglo de ritmos: ");
 console.log(ritmo_arr);
type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function() {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    // ctx = document.getElementById('lineChartExample').getContext("2d");
    // ---------------------------- PESO ----------------------------
    // ctx = document.getElementById('chartPeso').getContext("2d");

    // gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    // gradientStroke.addColorStop(0, '#80b6f4');
    // gradientStroke.addColorStop(1, chartColor);

    // // gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    // // gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    // // gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    // myChart = new Chart(ctx, {
    //   type: 'line',
    //   responsive: true,
    //   data: {
    //     labels: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60"],
    //     datasets: [{
    //       label: "Active Users",
    //       borderColor: "#f96332",
    //       pointBorderColor: "#FFF",
    //       pointBackgroundColor: "#f96332",
    //       pointBorderWidth: 2,
    //       pointHoverRadius: 4,
    //       pointHoverBorderWidth: 1,
    //       pointRadius: 4,
    //       fill: true,
    //       backgroundColor: gradientFill,
    //       borderWidth: 2,
    //       // data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
    //       data: peso_arr
    //     }]
    //   },
    //   // options: gradientChartOptionsConfiguration
    //   options: gradientChartOptionsConfigurationWithTooltipOrange
    // });
  // ---------------------------- ----------------------------
  },
  

  initDashboardPageCharts: function() {

    gradientChartOptionsConfigurationWithTooltipBlue = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            min: 0,
            max: 500,
            padding: 50,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 5,
            suggestedMax: 150,
            padding: 10,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipOrange = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            // min: Math.min.apply(this, peso_arr) - 5,
            // max: Math.min.apply(this, peso_arr) - 5,
            min: 0,
            max: 500,
            stepSize: 300,
            // suggestedMin: 5,
            // suggestedMax: 150,
            // padding: 5,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            // suggestedMin: 0,
            // suggestedMax: 5,
            min: 0,
            max: 300,
            // min: Math.min.apply(this, sonido_arr) - 5,
            // max: Math.min.apply(this, sonido_arr) - 5,
            padding: 5,
            // stepSize: 0.5,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: true,
            suggestedMax: false,
            // min: true,
            // max: false,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };
// ---------------------------- PESO ----------------------------
var ctxP = document.getElementById("chartPeso").getContext("2d");

var gradientStroke = ctxP.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
// gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');s
gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
tam_arr
var label_arr = [];
var escala_arr = 10;
// var ii;
for (let ii = 0; ii < tam_arr; ii++) {
  label_arr[ii] = escala_arr;
  escala_arr += 10;
}
var data = {
  // labels: ['0', '5', '10', '15', '20', '25', '30', '40'],
  // labels: ['0', '5', '10', '15', '20', '25', '30', '40'],
  labels: ['0', '3', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45'],
  datasets: [{
    label: "Data",
    fill: true,
    backgroundColor: gradientStroke,
    borderColor: '#d048b6',
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: '#d048b6',
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: '#d048b6',
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    // data: [80, 100, 70, 80, 120, 80],
    data: peso_arr,
  }]
};

var myChart = new Chart(ctxP, {
  type: 'line',
  data: data,
  // options: gradientChartOptionsConfigurationWithTooltipPurple
  options: gradientChartOptionsConfigurationWithTooltipOrange
});
// ---------------------------- LUZ ----------------------------
    var ctx = document.getElementById("lineChartExample").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    // gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');s
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var data = {
      labels: ['0', '5', '10', '15', '20', '25', '30', '40'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#d048b6',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#d048b6',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#d048b6',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        // data: [80, 100, 70, 80, 120, 80],
        data: luminosidad_arr,
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      // options: gradientChartOptionsConfigurationWithTooltipPurple
      options: gradientChartOptionsConfigurationWithTooltipBlue
    });

// ---------------------------- SONIDO ----------------------------

    var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

    var data = {
      labels: ['5', '10', '15', '20', '25', '30', '35', '45', '50'],
      datasets: [{
        label: "Sonido",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00d6b4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        // data: [90, 27, 60, 12, 80],
        data: sonido_arr,
      }]
    };

    var myChart = new Chart(ctxGreen, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen

    });



    var chart_labels = ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
    // var chart_data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100];

// ::::::::::::::::::::::::::::::::: Principales ::::::::::::::::::::::::::::::
    var ctx = document.getElementById("chartBig1").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d346b1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d346b1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          // data: chart_data,
          data: ritmo_arr,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple
    };
    var myChartData = new Chart(ctx, config);
    $("#0").click(function() {
      var data = myChartData.config.data;
      // data.datasets[0].data = chart_data;
      data.datasets[0].data = ritmo_arr;
      data.labels = chart_labels;
      myChartData.update();
    });
    $("#1").click(function() {
      // var chart_data = [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120];
      // var chart_data = inclinacion_arr;
      var data = myChartData.config.data;
      // data.datasets[0].data = chart_data;
      data.datasets[0].data = inclinacion_arr;
      data.labels = chart_labels;
      myChartData.update();
    });

    $("#2").click(function() {
      // var chart_data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
      // var chart_data = inclinacion_arr;
      var data = myChartData.config.data;
      // data.datasets[0].data = chart_data;
      data.datasets[0].data = pasos_arr;
      data.labels = chart_labels;
      myChartData.update();
    });
// ::::::::::::::::::::::::::::::::::::::: x2 ::::::::::::::::::::::::::::::::::::::::::::::::

// var ctx = document.getElementById("chartBig11").getContext('2d');

// var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

// gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
// gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
// gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
// var config = {
//   type: 'line',
//   data: {
//     labels: chart_labels,
//     datasets: [{
//       label: "My First dataset",
//       fill: true,
//       backgroundColor: gradientStroke,
//       borderColor: '#d346b1',
//       borderWidth: 2,
//       borderDash: [],
//       borderDashOffset: 0.0,
//       pointBackgroundColor: '#d346b1',
//       pointBorderColor: 'rgba(255,255,255,0)',
//       pointHoverBackgroundColor: '#d346b1',
//       pointBorderWidth: 20,
//       pointHoverRadius: 4,
//       pointHoverBorderWidth: 15,
//       pointRadius: 4,
//       // data: chart_data,
//       data: peso_arr,
//     }]
//   },
//   options: gradientChartOptionsConfigurationWithTooltipPurple
// };
// var myChartData = new Chart(ctx, config);
// $("#01").click(function() {
//   var data = myChartData.config.data;
//   // data.datasets[0].data = chart_data;
//   data.datasets[0].data = peso_arr;
//   data.labels = chart_labels;
//   myChartData.update();
// });
// $("#11").click(function() {
//   // var chart_data = [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120];
//   var chart_data = inclinacion_arr;
//   var data = myChartData.config.data;
//   // data.datasets[0].data = chart_data;
//   data.datasets[0].data = luminosidad_arr;
//   data.labels = chart_labels;
//   myChartData.update();
// });

// $("#21").click(function() {
//   // var chart_data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
//   // var chart_data = inclinacion_arr;
//   var data = myChartData.config.data;
//   // data.datasets[0].data = chart_data;
//   data.datasets[0].data = pasos_arr;
//   data.labels = chart_labels;
//   myChartData.update();
// });

    var ctx = document.getElementById("CountryChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


    var myChart = new Chart(ctx, {
      type: 'bar',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: ['10', '20', '30', '40', '50', '60'],
        datasets: [{
          label: "Countries",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: agua_arr,
        }],
      },
      options: gradientBarChartConfiguration
    });

    // *****************************************************************************************************************
    // General configuration for the charts with Line gradientStroke
// gradientChartOptionsConfiguration1 =  {
//   maintainAspectRatio: false,
//   legend: {
//         display: false
//    },

//    tooltips: {
//      backgroundColor: '#fff',
//      titleFontColor: '#333',
//      bodyFontColor: '#666',
//      bodySpacing: 4,
//      xPadding: 12,
//      mode: "nearest",
//      intersect: 0,
//      position: "nearest"
//    },
//    responsive: true,
//    scales:{
//      yAxes: [{
//        barPercentage: 1.6,
//            gridLines: {
//              drawBorder: false,
//                color: 'rgba(29,140,248,0.0)',
//                zeroLineColor: "transparent",
//            },
//            ticks: {
//              suggestedMin:50,
//              suggestedMax: 110,
//                padding: 20,
//                fontColor: "#9a9a9a"
//            }
//          }],

//      xAxes: [{
//        barPercentage: 1.6,
//            gridLines: {
//              drawBorder: false,
//                color: 'rgba(220,53,69,0.1)',
//                zeroLineColor: "transparent",
//            },
//            ticks: {
//                padding: 20,
//                fontColor: "#9a9a9a"
//            }
//          }]
//      }
// };

// var ctx = document.getElementById("lineChartExample").getContext("2d");

// var gradientStroke = ctx.createLinearGradient(0,230,0,50);

// gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
// gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
// gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

// var data = {
//   // labels: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
//   labels: ['5','10','15','20','25','30','35','40','45','50','55','60'],
//   datasets: [{
//     label: "Data",
//     fill: true,
//     backgroundColor: gradientStroke,
//     borderColor: '#d048b6',
//     borderWidth: 2,
//     borderDash: [],
//     borderDashOffset: 0.0,
//     pointBackgroundColor: '#d048b6',
//     pointBorderColor:'rgba(255,255,255,0)',
//     pointHoverBackgroundColor: '#d048b6',
//     pointBorderWidth: 20,
//     pointHoverRadius: 4,
//     pointHoverBorderWidth: 15,
//     pointRadius: 4,
//     // data: [ 60,110,70,100, 75, 90, 80, 100, 70, 80, 120, 80],
//     data: luminosidad_arr,
//   }]
// };

// var myChart = new Chart(ctx, {
//   type: 'line',
//   data: data,
//   options: gradientChartOptionsConfiguration1
// });
    // *****************************************************************************************************************

  },

  initGoogleMaps: function() {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8ec3b9"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1a3646"
          }]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#64779e"
          }]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#334e87"
          }]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#283d6a"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6f9ba5"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#3C7680"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#304a7d"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#2c6675"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#9d2a80"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#9d2a80"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#b0d5ce"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#283d6a"
          }]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#3a4762"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#0e1626"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#4e6d70"
          }]
        }
      ]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  },

  showNotification: function(from, align) {
    color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "tim-icons icon-bell-55",
      message: "Welcome to <b>Black Dashboard</b> - a beautiful freebie for every web developer."

    }, {
      type: type[color],
      timer: 8000,
      placement: {
        from: from,
        align: align
      }
    });
  }

};