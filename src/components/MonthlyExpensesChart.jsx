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
// const chartColors = [
//   "#336699",
//   "#99CCFF",
//   "#999933",
//   "#666699",
//   "#CC9933",
//   "#006666",
//   "#3399FF",
//   "#993300",
//   "#CCCC99",
//   "#666666",
//   "#FFCC66",
//   "#6699CC",
//   "#663366",
//   "#9999CC",
//   "#CCCCCC",
//   "#669999",
//   "#CCCC66",
//   "#CC6600",
//   "#9999FF",
//   "#0066CC",
//   "#99CCCC",
//   "#999999",
//   "#FFCC00",
//   "#009999",
//   "#99CC33",
//   "#FF9900",
//   "#999966",
//   "#66CCCC",
//   "#339966",
//   "#CCCC33",
//   "#003f5c",
//   "#665191",
//   "#a05195",
//   "#d45087",
//   "#2f4b7c",
//   "#f95d6a",
//   "#ff7c43",
//   "#ffa600",
//   "#EF6F6C",
//   "#465775",
//   "#56E39F",
//   "#59C9A5",
//   "#5B6C5D",
//   "#0A2342",
//   "#2CA58D",
//   "#84BC9C",
//   "#CBA328",
//   "#F46197",
//   "#DBCFB0",
//   "#545775"
// ];

const chartColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "purple",
  "blue",

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

      }
    ]
  };

  return(
    <div className="container col-6 mt-5">
      {console.log(data_array)}
      <Doughnut data={data} />
    </div>
  )
}

export default MonthlyExpensesChart;
