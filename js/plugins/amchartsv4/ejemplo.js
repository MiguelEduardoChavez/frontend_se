var Graficas = function (){
  var barrasV1 = function(){
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    
    chart.data = [{
    "category": "Población economicamente activa",
    "value": 12.5
    }, {
    "category": "Empresas",
    "value": 6
    }, {
    "category": "Emprendedores",
    "value": 30
    }];
    
    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";
    series.name = "Sales";

      // Enable export
      chart.exporting.menu               = new am4core.ExportMenu();
      chart.exporting.menu.align         = "left";
      chart.exporting.menu.verticalAlign = "top";
      chart.exporting.menu.items         = [
      {
      "label"                            : "...",
      "menu"                             : [
      { "type"                           : "png", "label": "PNG" },
      { "type"                           : "pdf", "label": "PDF" },
      { "label"                          : "Imprimir", "type": "print" },
      { "type"                           : "jpg", "label": "JPG" }
      ]
      }
      ];
  }
  var pastelV1 = function () {
      am4core.useTheme(am4themes_animated);

        var chartPastel = am4core.createFromConfig({
        // Set data
        data: [{
        "proyecto": "Feria del tamal",
        "avance": 50
        }, {
        "proyecto": "Feria del tamal 2",
        "avance": 12.5
        }, {
        "proyecto": "Feria del tamal 3",
        "avance": 12.5
        }, {
        "proyecto": "Feria del tamal 4",
        "avance": 5
        }, {
        "proyecto": "Feria del tamal 5",
        "avance": 20
        }],
        
        // Create series
        "series": [{
        "type": "PieSeries",
        "dataFields": {
        "value": "avance",
        "category": "proyecto"
        },
        "hiddenState": {
        "properties": {
        // this creates initial animation
        "opacity": 1,
        "endAngle": -90,
        "startAngle": -90
        }
        }
        }],
        
        // Add legend
        "legend": {}
        }, "chartPastel", "PieChart");
        chartPastel.exporting.menu = new am4core.ExportMenu();
  }
  var barrasXYslider = function () {
            am4core.useTheme(am4themes_animated);
            am4core.useTheme(am4themes_kelly);

// Create chart instance
            var chart = am4core.create("chartBarraXYslider", am4charts.XYChart);

// Add data
            chart.data = [{
                "country": "Lithuania",
                "litres": 501.9,
                "units": 250
            }, {
                "country": "Czech Republic",
                "litres": 301.9,
                "units": 222
            }, {
                "country": "Ireland",
                "litres": 201.1,
                "units": 170
            }, {
                "country": "Germany",
                "litres": 165.8,
                "units": 122
            }, {
                "country": "Australia",
                "litres": 139.9,
                "units": 99
            }, {
                "country": "Austria",
                "litres": 128.3,
                "units": 85
            }, {
                "country": "UK",
                "litres": 99,
                "units": 93
            }, {
                "country": "Belgium",
                "litres": 60,
                "units": 50
            }, {
                "country": "The Netherlands",
                "litres": 50,
                "units": 42
            }];

// Create axes
            var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "country";
            categoryAxis.renderer.minGridDistance = 40;
            categoryAxis.title.text = "Countries";

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = "Litres sold (M)";

// Create series
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = "litres";
            series.dataFields.categoryX = "country";
            series.name = "Sales";
            series.tooltipText = "{name}: [bold]{valueY}[/]";

            var series2 = chart.series.push(new am4charts.LineSeries());
            series2.dataFields.valueY = "units";
            series2.dataFields.categoryX = "country";
            series2.name = "Units";
            series2.tooltipText = "{name}: [bold]{valueY}[/]";
            series2.strokeWidth = 3;

// Add legend
            chart.legend = new am4charts.Legend();

// Add cursor
            chart.cursor = new am4charts.XYCursor();

// Add simple vertical scrollbar
            chart.scrollbarY = new am4core.Scrollbar();

// Add horizotal scrollbar with preview
            var scrollbarX = new am4charts.XYChartScrollbar();
            scrollbarX.series.push(series);
            chart.scrollbarX = scrollbarX;
        }
  return {
        init: function() {

            pastelV1();
            barrasV1();
            barrasXYslider();
        }

    };

}();

