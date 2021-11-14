import React from 'react';
import Plot from 'react-plotly.js';
import {neighborhood_for_time, neighborhood_mean } from './data/response_time.js';
import {neighborhood, percent_overdue } from './data/overdue_percent.js';

class AnswerTime extends React.Component {
  render() {
    return (
     <div style={{width: "100%"},{display: "table"}}>
    <div style={{display: "table-row"}}>
        <div style={{width: "600px"},{display: "table-cell"}}> <Plot
        data={[
  {
    x: neighborhood_for_time,
    y: neighborhood_mean,
    type: 'bar'
  }
]}
        layout={ {width: 500, height: 500, title: 'Completion time', yaxis:{
    title: 'Days to close request'}} }
      />
      <ul>
<li>Less affluent neighbourhoods 
such as Hyde Park, East Boston <br /> and Charlestown
were among those where it took longest <br /> for 311 requests to be answered.
</li>
<li>Requests were answered most quickly in South Boston,<br /> which has gentrified rapidly over the past ten years.</li>
</ul></div>
        <div style={{display: "table-cell"}}> <Plot
        data={[
  {
    x: neighborhood,
    y: percent_overdue,
    type: 'bar'
  }
]}
        layout={ {width: 500, height: 500, title: 'Overdue requests', yaxis:{
    title: 'Percentage of requests completed late'}} }
      /> <ul>
<li>Less affluent neighbourhoods 
were also more likely to have service requests completed late, <br /> with Fenway, Mattapan and Hyde Park the three most affected.
</li>
<li>Chestnut Hill, the South End and Back Bay, all relatively affluent, were the least affected.</li>
</ul></div>
    </div>
</div>
    );
  }
}


export default AnswerTime;


