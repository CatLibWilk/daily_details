import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function WeekChart({daily_data_array, title}){

  const data = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
     ],

    datasets: [

      {
        label: title,
        backgroundColor: 'rgba(181, 149, 35)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: daily_data_array
      }
    ]
  }
  return(
    <div className="container col-6 mt-5">
      <Bar 
        data={data}

        options={{
          title:{
            display:false,
            text:title,
            fontSize:20
          },
          legend:{
            display:false,
            position:'right'
          },
          maintainAspectRatio: true
        }}
      />
    </div>
  )
}

export default WeekChart;
