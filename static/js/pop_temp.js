function buildPopTempChart(state, fromDate, toDate) {
  var defaultURL = "/pop-temp/" + state + "/" + fromDate + "/" + toDate;

  d3.json(defaultURL).then(function(data) {
var trace1 = {
  x: data.year,
  y: data.avgTemp,
  text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
  mode: 'markers',
  marker: {
    size: data.avgTemp,
    sizemode: 'area'
  },
  name : 'Temperature'
};

var trace2 = {
  x: data.year,
  y: data.population/800000,
  text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
  mode: 'markers',
  marker: {
    size: (data.population/800000) * 100,
    //setting 'sizeref' to lower than 1 decreases the rendered size
    sizeref: 2,
    sizemode: 'area'
  },
  name : 'Population'
};

var data = [trace1, trace2];

var layout = {
  // title: 'Temperature vs Population',
  showlegend: true
  // height: 600,
  // width: 600
};

Plotly.newPlot('pop_temp', data, layout);

})};