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