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

function WeekChart({state_data}){

  const daily_spending_data_array = Object.values( state_data ).map( ( day ) => day.money )

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
        label: 'Daily Spending',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: daily_spending_data_array
      }
    ]
  }
  return(
    <div className="container mt-5 chart-canvas-container">
      <Bar 
        data={data}

        options={{
          title:{
            display:true,
            text:'Daily Spending',
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
