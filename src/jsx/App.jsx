import React, {Component} from 'react';
import style from './../styles/styles.less';

// https://d3js.org/
import * as d3 from 'd3';

// https://www.chartjs.org/
import Chart from 'chart.js';
const numberOfContinents = 6,
      monthNames = {'01': 'January','02': 'February','03': 'March','04': 'April','05': 'May','06': 'June','07': 'July'},
      dataSets = [
        {backgroundColor:'',borderColor:'#f63c00',borderWidth:7,data:[],fill:false,label:'Asia',radius:0,order:55,yOffsetcumulative:27.5,yOffsetdaily:23},
        {backgroundColor:'',borderColor:'#c30000',borderWidth:7,data:[],fill:false,label:'Europe',radius:0,order:54,yOffsetcumulative:34.5,yOffsetdaily:78},
        {backgroundColor:'',borderColor:'#00ce00',borderWidth:7,data:[],fill:false,label:'North America',radius:0,order:53,yOffsetcumulative:7.5,yOffsetdaily:14},
        {backgroundColor:'',borderColor:'#008100',borderWidth:7,data:[],fill:false,label:'South America',radius:0,order:52,yOffsetcumulative:31,yOffsetdaily:17},
        {backgroundColor:'',borderColor:'#ffd600',borderWidth:7,data:[],fill:false,label:'Africa',radius:0,order:51,yOffsetcumulative:82.5,yOffsetdaily:76},
        {backgroundColor:'',borderColor:'#c23d80',borderWidth:7,data:[],fill:false,label:'Oceania',radius:0,order:50,yOffsetcumulative:94.5,yOffsetdaily:94.5}];

let interval,
    ctx,
    line_chart;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    // Create necessary refs.
    this.appRef = React.createRef();
    this.lineChartRef = React.createRef();
  }
  componentDidMount() {
    const filename = this.getHashValue('data') ? this.getHashValue('data') : 'cumulative';
    setTimeout(() => {
      this.createLineChart(16/9, filename);
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {
    clearInterval(interval);
  }
  getHashValue(key) {
    const matches = location.hash.match(new RegExp(key+'=([^&]*)'));
    return matches ? matches[1] : null;
  }
  createLineChart(ratio, filename) {
    // Define options.
    let options = {
      data:{
        datasets:[],
        labels:['2019-12-31','2020-01-01','2020-01-02','2020-01-03','2020-01-04','2020-01-05','2020-01-06','2020-01-07','2020-01-08','2020-01-09','2020-01-10','2020-01-11','2020-01-12','2020-01-13','2020-01-14','2020-01-15','2020-01-16','2020-01-17','2020-01-18','2020-01-19','2020-01-20','2020-01-21','2020-01-22','2020-01-23','2020-01-24','2020-01-25','2020-01-26','2020-01-27','2020-01-28','2020-01-29','2020-01-30','2020-01-31','2020-02-01','2020-02-02','2020-02-03','2020-02-04','2020-02-05','2020-02-06','2020-02-07','2020-02-08','2020-02-09','2020-02-10','2020-02-11','2020-02-12','2020-02-13','2020-02-14','2020-02-15','2020-02-16','2020-02-17','2020-02-18','2020-02-19','2020-02-20','2020-02-21','2020-02-22','2020-02-23','2020-02-24','2020-02-25','2020-02-26','2020-02-27','2020-02-28','2020-02-29','2020-03-01','2020-03-02','2020-03-03','2020-03-04','2020-03-05','2020-03-06','2020-03-07','2020-03-08','2020-03-09','2020-03-10','2020-03-11','2020-03-12','2020-03-13','2020-03-14','2020-03-15','2020-03-16','2020-03-17','2020-03-18','2020-03-19','2020-03-20','2020-03-21','2020-03-22','2020-03-23','2020-03-24','2020-03-25','2020-03-26','2020-03-27','2020-03-28','2020-03-29','2020-03-30','2020-03-31','2020-04-01','2020-04-02','2020-04-03','2020-04-04','2020-04-05','2020-04-06','2020-04-07','2020-04-08','2020-04-09','2020-04-10','2020-04-11','2020-04-12','2020-04-13','2020-04-14','2020-04-15','2020-04-16','2020-04-17','2020-04-18','2020-04-19','2020-04-20','2020-04-21','2020-04-22','2020-04-23','2020-04-24','2020-04-25','2020-04-26','2020-04-27','2020-04-28','2020-04-29','2020-04-30','2020-05-01','2020-05-02','2020-05-03','2020-05-04','2020-05-05','2020-05-06','2020-05-07','2020-05-08','2020-05-09','2020-05-10','2020-05-11','2020-05-12','2020-05-13','2020-05-14','2020-05-15','2020-05-16','2020-05-17','2020-05-18','2020-05-19','2020-05-20','2020-05-21','2020-05-22','2020-05-23','2020-05-24','2020-05-25','2020-05-26','2020-05-27','2020-05-28','2020-05-29','2020-05-30','2020-05-31','2020-06-01','2020-06-02','2020-06-03','2020-06-04','2020-06-05','2020-06-06','2020-06-07','2020-06-08','2020-06-09','2020-06-10','2020-06-11','2020-06-12','2020-06-13','2020-06-14','2020-06-15','2020-06-16','2020-06-17','2020-06-18','2020-06-19','2020-06-20','2020-06-21','2020-06-22','2020-06-23','2020-06-24','2020-06-25','2020-06-26','2020-06-27','2020-06-28','2020-06-29','2020-06-30','2020-07-01','2020-07-02','2020-07-03','2020-07-04','2020-07-05','2020-07-06']
      },
      options:{
        aspectRatio:ratio,
        hover:{
          enabled:false,
        },
        layout: {
          padding: {
            left:0,
            right:100,
            top:0,
            bottom:0
          }
        },
        legend:{
          align:'left',
          display:true,
          labels: {
            fontSize:20,
            fontStyle:'bold'
          },
          onClick:false,
          position:'top'
        },
        responsive:true,
        scales:{
          xAxes:[{
            display:true,
            gridLines:{
              display:false
            },
            ticks: {
              autoSkip:false,
              callback: function(value, index, values) {
                if (value.split('-')[2] === '15') {
                  return monthNames[value.split('-')[1]];
                }
                else if (value.split('-')[2] === '01') {
                  return '|';
                }
              },
              fontColor:'#444',
              fontSize:20,
              fontStyle:'bold',
              maxRotation:0,
              minRotation:0
            },
            scaleLabel:{
              display:false,
            }
          }],
          yAxes:[{
            display:true,
            gridLines:{
              display:true
            },
            position:'left',
            scaleLabel:{
              display:true,
              fontColor:'#444',
              fontSize:14,
              fontStyle:'bold',
              labelString:''
            },
            // https://www.chartjs.org/docs/latest/axes/cartesian/linear.html#axis-range-settings
            ticks: {
              callback: function(value, index, values) {
                return value.toLocaleString('fi-FI');
              },
              fontColor:'#444',
              fontSize:16,
              fontStyle:'bold',
              suggestedMax:(filename === 'cumulative') ? 3500000 : 60000,
              suggestedMin:0
            },
            type:'linear'
          }]
        },
        title:{
          display:false,
          text:''
        },
        tooltips:{
          enabled:false
        }
      },
      type:'line'
    }

    // Get context from ref.
    ctx = this.lineChartRef.current.getContext('2d');
    line_chart = new Chart(ctx, options);

    this.loadData(line_chart, filename);
  }
  drawLabels(t, filename) {
    ctx.save();
    ctx.font = Chart.helpers.fontString(12, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
    ctx.textBaseline = 'bottom'; 
    ctx.font = 'bold 18px Arial';

    let chartInstance = t.chart,
        datasets = chartInstance.config.data.datasets;
    datasets.forEach(function(ds, index) {
      ctx.fillStyle = ds.borderColor
      let label = ds.label,
          meta = chartInstance.controller.getDatasetMeta(index),
          len = meta.data.length - 1,
          xOffset = meta.data[len]._model.x,
          value = parseInt(ds.data[ds.data.length - 2]).toLocaleString('fi-FI');
      ctx.fillText(value, xOffset, (ds['yOffset' + filename] / 100) * chartInstance.height);
    });
    ctx.restore();
  }
  loadData(line_chart, filename) {
    // http://learnjsdata.com/read_data.html
    d3.csv('./data/data - ' + filename + '.csv').then((data) => {
      let current_continent_idx = 0;
      this.addData(data, current_continent_idx, line_chart, filename);
      this.appRef.current.style.display = 'block';
    });
  }
  addData(data, current_continent_idx, line_chart, filename) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
    let chart_data = Object.values(data[current_continent_idx]).slice(1);
    chart_data.pop();
    let idx = 0;

    line_chart.data.datasets.push(dataSets[current_continent_idx]);
    line_chart.update(0);
    interval = setInterval(() => {
      // https://www.chartjs.org/docs/latest/developers/updates.html
      line_chart.data.datasets[current_continent_idx].data.push(chart_data[idx]);
      line_chart.update(0);
      if (idx >= chart_data.length) {
        clearInterval(interval);
        setTimeout(() => {
          current_continent_idx++;
          if (current_continent_idx < numberOfContinents) {
            this.addData(data, current_continent_idx, line_chart, filename)
          }
          else {
            this.drawLabels(line_chart, filename);
          }
        }, 0);
      }
      idx++;
    }, 20);
  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app} ref={this.appRef}>
        <canvas id={style.line_chart} ref={this.lineChartRef}></canvas>
      </div>
    );
  }
}
export default App;