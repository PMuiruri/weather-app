import React, { Component } from 'react';
import {Chart} from 'react-google-charts';
import moment from 'moment';

class weatherChart extends Component {

  render() {
    console.log(this.props.fulldata);
    const time = this.props.fulldata.map(list => list.dt_txt);
    console.log(time);
    const temperature = this.props.fulldata.map(list => list.main.temp);
    console.log(temperature);

    const chartData = [['Hour', 'Temperature']]
    for (let i = 0; i < this.props.fulldata.length; i += 1) {
      chartData.push([moment( time[i]).format('LT'), temperature[i]]);
    }
    return (
      <div style={{ display: 'flex', }}>
        <Chart
          width={1245}
          height={450}
          chartType="ComboChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            title: 'Weather Forecast',
            chartArea: { width: '70%' },
            hAxis: {
              title: 'Time',
              minValue: 0,
            },
            vAxis: {
              title: 'Temperature',
            },
            seriesType: 'bars',
            series: { 5: { type: 'line' }},
            colors: ['#d9534f'],
            backgroundColor: '#E4E4E4',
          }}
          legendToggle
        />
      </div>
    );
  }

}

export default weatherChart;
