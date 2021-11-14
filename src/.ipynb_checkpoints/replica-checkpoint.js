import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import { neighborhood, percent_overdue } from './data/overdue_percent.js'
import {neighborhood_for_time, neighborhood_mean } from './data/response_time.js'

class ServiceTwo extends React.Component {
  render() {
    return (
      <div>
      <div>
      <Plot
        data={[
  {
    x: neighborhood,
    y: percent_overdue,
    type: 'bar'
  }
]}
        layout={ {width: 500, height: 500, title: 'Overdue requests by neighborhood', yaxis:{
    title: 'Proportion of service requests overdue'} }}
      />,
    <Plot
        data={[
  {
    x: neighborhood_for_time,
    y: neighborhood_mean,
    type: 'bar'
  }
]}
        layout={ {width: 500, height: 500, title: 'Completion time by neighborhood', yaxis:{
    title: 'Days to close request, by neighborhood '}} }
      />,
      <h3>Reflections</h3>
      <ul>
<li>Less affluent neighbourhoods 
<br /> such as Hyde Park, East Boston, and Charlestown 
were among those where<br /> it took longest for 311 requests to be answered.
</li>
<li>Requests were answered most quickly in South Boston,<br /> which has gentrified rapidly over the past ten years.</li>
<li>The order of neighbourhoods was very different for overdue requests, <br /> with Allston residents the most likely to experience overdue service requests.</li>
<li>Chestnut Hill continued to lead the table in quality of services, with the lowest proportion of overdue requests. </li>
<li>As before, more affluent neighbourhoods had better outcomes, with a lower proportion of overdue requests than less affluent areas.</li>
</ul></div>
      
      <div>
</div>
</div>
    );
  }
}


export default ServiceTwo;
