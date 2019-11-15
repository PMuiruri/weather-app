import React, { Component } from 'react';
import {Chart} from 'react-google-charts';
import moment from 'moment';

class weatherChart extends Component {

  render() {
    const time = this.props.fulldata.map(list => list.dt_txt);
    const temperature = this.props.fulldata.map(list => list.main.temp);
    let time1 = time.map(time=>Date.parse(time))
    const chartData = [['hour', 'Temperature']]
    for (let i = 0; i < this.props.fulldata.length; i += 1){
      //chartData.push([{v:time[i].split(' ')[1].split(':')[0],
        //f:time[i].split(' ')[1]}, temperature[i]]);
      //chartData.push([time[i].split(' ')[1], temperature[i]]);
      chartData.push([new Date(time1[i]).toLocaleTimeString('en-US'), temperature[i]]);
      //chartData.push([moment( time[i]).format('LT'), temperature[i]]);
      //chartData.push([ i, temperature[i]]);
    }

    console.log(chartData);
    const day = [];
    for (let i = 0; i < this.props.fulldata.length; i += 1) {
      day.push([moment( time[i]).format('dddd')]);
    }
    return (
      <div style={{ display: 'flex', marginBottom: '5px'}}>
        <Chart
          width={'100%'}
          height={'45vh'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            title: 'Weather Forecast',
            titleTextStyle: {color: '#FFF', fontSize: 20},
            chartArea: { width: '70%' },
            hAxis: {
              title: 'Time',
              minValue: 0,
              titleTextStyle: {color: '#FFF', fontSize: 18, fontStyle:'normal'},
              textStyle:{color: '#FFF'},
              type: 'timeofday',
              ticks:[new Date(time1[0]).toLocaleTimeString('en-US')]
            },
            vAxis: {
              title: 'Temperature',
              titleTextStyle: {color: '#FFF', fontSize: 18, fontStyle:'normal'},
              textStyle:{color: '#FFF'}
            },
            legend: {textStyle: {color: '#fff', fontSize:18}},
            seriesType: 'line',
            colors: ['#d9534f', '#fff'],
            backgroundColor: '#254059',
          }}
          legendToggle
        />
      </div>
    );
  }

}

export default weatherChart;
