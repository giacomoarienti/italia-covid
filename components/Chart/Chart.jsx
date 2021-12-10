import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { objectIsEmpty } from '../../utils/';

import styles from './Chart.module.css';

const Chart = ({data, type, view, zone}) => {
  var chart = null;
  var dates = null;

  if(!objectIsEmpty(data)) {
    switch(type) {
      case "vaccines":
        data = data["vaccines"];
  
        chart = (
          <Bar
            data={{
              labels: [new Date(data.date).toLocaleDateString('it-IT')],
              datasets: [{
                data: [data.deliveredDose, 0],
                label: 'Consegnati',
                borderColor: 'pink',
                backgroundColor: 'rgba(255, 0, 234, 0.5)',
                fill: true,
              }, {
                data: [data.somministratedDose, 0],
                label: 'Somministrati',
                borderColor: 'pink',
                backgroundColor: 'rgba(132, 0, 255, 0.5)',
                fill: true,
              },
              ],
            }}
            options={{
              legend: { display: true },
            }}
          />
        );
        break;

      case "provinces":
        if(objectIsEmpty(data["provinces"])) {
          chart = (
            <div className={styles.center}>
              <label>Caricamento...</label>
            </div>
          )
          break;
        }
        data = data.provinces;
        
        const provinces = Object.keys(data);
        if(zone === "" || !zone) {
          data = data[provinces[0]].dates
        } else {
          data = data[zone].dates;
        }

        dates = Object.keys(data);

        switch(view) {
          case 'week':
            dates = dates.slice((dates.length-7), dates.length);
            break;
          case 'month':
            dates = dates.slice((dates.length-30), dates.length);
            break;
          case 'year':
            dates = dates.slice((dates.length-365), dates.length);
            break;
          default:
            break;
        }

        chart = (
          <Line
            data={{
              labels: dates.map((date) => new Date(date).toLocaleDateString('it-IT')),
              datasets: [{
                data: dates.map((date) => data[date].increase),
                label: 'Casi',
                borderColor: '#3333ff',
                backgroundColor: 'rgba(0, 0, 255, 0.5)',
                fill: true,
              },
              ],
            }}
            options={{
              legend: { display: true },
            }}
          />
        );
        break;

      case 'deaths':
        data = data.dates;
        dates = Object.keys(data);

        switch(view) {
          case 'week':
            dates = dates.slice((dates.length-7), dates.length);
            break;
          case 'month':
            dates = dates.slice((dates.length-30), dates.length);
            break;
          case 'year':
            dates = dates.slice((dates.length-365), dates.length);
            break;
          default:
            break;
        }

        chart = (
          <Bar
            data={{
              labels: dates.map((date) => new Date(date).toLocaleDateString('it-IT')),
              datasets: [{
                data: dates.map((date) => data[date].newDeaths),
                label: 'Morti',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              }, {
                data: dates.map((date) => data[date].newHospitalised),
                label: 'Ricoverati',
                borderColor: 'orange',
                backgroundColor: 'rgba(255, 115, 0, 0.5)',
                fill: true,
              },
              ],
            }}
            options={{
            legend: { display: true },
            }}
          />
        );
        break;
      
      case 'confirmeds':
        data = data.dates;
        dates = Object.keys(data);

        switch(view) {
          case 'week':
            dates = dates.slice((dates.length-7), dates.length);
            break;
          case 'month':
            dates = dates.slice((dates.length-30), dates.length);
            break;
          case 'year':
            dates = dates.slice((dates.length-365), dates.length);
            break;
          default:
            break;
        }

        chart = (
          <Line
            data={{
              labels: dates.map((date) => new Date(date).toLocaleDateString('it-IT')),
              datasets: [{
                data: dates.map((date) => data[date].newConfirmed),
                label: 'Contagi',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: dates.map((date) => data[date].newRecovered),
                label: 'Guariti',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              },
              ],
            }}
            options={{
              legend: { display: true },
            }}
          />
        );
        break;

      default:
        chart = (
          <div className={styles.center}>
            <label>Caricamento...</label>
          </div>
        )
        break;  
    }
  } else {
    chart = (
      <div className={styles.center}>
        <label>Caricamento...</label>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {chart}
    </div>
  );
};

export default Chart;
