import React, { Component } from 'react';
import {Chart} from 'react-google-charts';
import moment from 'moment';

class weatherChart extends Component {

  render() {
    const time = this.props.fulldata.map(list => list.dt_txt);
    const temperature = this.props.fulldata.map(list => list.main.temp);

    const chartData = [['Hour', 'Temperature']]
    for (let i = 0; i < this.props.fulldata.length; i += 1) {
      chartData.push([moment( time[i]).format('LT'), temperature[i]]);
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
              textStyle:{color: '#FFF'}
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
