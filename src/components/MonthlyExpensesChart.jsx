import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const chartColors = [
  'rgba(255, 0, 0, 0.75)',
  'rgba(255, 159, 64, 0.75)',
  'rgba(255, 255, 0, 0.75)',
  'rgba(0, 128, 0, 0.75)',
  'rgba(159, 90, 253, 0.75)',
  'rgba(0, 0, 255, 0.75)',

];

const borderColors = [
  'rgba(255, 0, 0, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(255, 255, 0, 1)',
  'rgba(0, 128, 0, 1)',
  'rgba(159, 90, 253, 1)',
  'rgba(0, 0, 255, 1)',

];

function MonthlyExpensesChart( { data_array, labels } ){

  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: labels,
    datasets: [
      {
        data: data_array,
        backgroundColor: chartColors,
        borderColor: borderColors,
        borderWidth: 2,
        

      }
    ]

  };

  return(
    <div className="">
    {/* <div className="container col-6 mt-5"> */}
      {console.log(data_array)}
      <Doughnut data={data} />
    </div>
  )
}

export default MonthlyExpensesChart;
