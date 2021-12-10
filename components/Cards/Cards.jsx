import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

import { objectIsEmpty } from '../../utils/';

const Info = ({data, region}) => {  
  if(objectIsEmpty(data)) {
    return (
      <div className={styles.container1}>
        <Typography gutterBottom variant="h5" component="h4">Caricamento...</Typography>
      </div>
    );
  }

  const {confirmed, recovered, deaths, hospitalised, tests, positivityRate, newConfirmed, newRecovered, newDeaths, newHospitalised, newTests, newPositivityRate, date} = data.lastUpdate;

  return (
    <div className={styles.container}>
      <Typography className={styles.title} gutterBottom variant="h4" component="h3">{region}</Typography>
      <Grid className={styles.grid} container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Contagi"
          value={confirmed}
          newValue={newConfirmed}
          lastUpdate={date}
          cardSubtitle="Numero di casi attivi da COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Guariti"
          value={recovered}
          newValue={newRecovered}
          lastUpdate={date}
          cardSubtitle="Numero di guariti da COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Morti"
          value={deaths}
          newValue={newDeaths}
          lastUpdate={date}
          cardSubtitle="Numero di morti da COVID-19."
        />
        <CardComponent
          className={styles.hospitalised}
          cardTitle="Ricoveri"
          value={hospitalised}
          newValue={newHospitalised}
          lastUpdate={date}
          cardSubtitle="Numero di ricoveri da COVID-19."
        />
        <CardComponent
          className={styles.tests}
          cardTitle="Tamponi"
          value={tests}
          newValue={newTests}
          lastUpdate={date}
          cardSubtitle="Numero di tamponi per COVID-19."
        />
        <CardComponent
          className={styles.positivityRate}
          cardTitle="Tasso di positivit&agrave;"
          value={positivityRate}
          newValue={newPositivityRate}
          lastUpdate={date}
          cardSubtitle="Numero di infetti su tamponi per COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
