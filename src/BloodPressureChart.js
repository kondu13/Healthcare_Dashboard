import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import { color } from 'chart.js/helpers';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BloodPressureChart = ({ diagnosis_history = [] }) => {
    // Get only the last 6 months of data
    const lastSixMonthsHistory = diagnosis_history.slice(0, 6).reverse(); // Slicing the first 6 elements and reversing to get correct order

    const months = lastSixMonthsHistory.map(entry => `${entry.month.slice(0,3)}, ${entry.year}`);
    const systolicValues = lastSixMonthsHistory.map(entry => entry.blood_pressure.systolic.value);
    const diastolicValues = lastSixMonthsHistory.map(entry => entry.blood_pressure.diastolic.value);

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Systolic',
                data: systolicValues,
                borderColor: '#E66FD2',
                tension: 0.4,
                backgroundColor: '#E66FD2',
                pointRadius: 6,
            },
            {
                label: 'Diastolic',
                data: diastolicValues,
                borderColor: '#8C6FE6',
                backgroundColor: '#8C6FE6',
                tension: 0.4,
                pointRadius: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, 
            },
            title: {
                display: false, 
            },
        },
        scales: {
            x: {
              grid: {
                display: false, 
              },
            },
          },
    };

    return <Line className='graph' data={data} options={options} />;
};

export default BloodPressureChart;
