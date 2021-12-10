import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.module.css';

const options = {'weekday': 'short', 'month': 'short', 'day': '2-digit', 'year': 'numeric'};

const CardComponent = ({ className, cardTitle, value, newValue, lastUpdate, cardSubtitle }) => (
  <Grid item xs={12} md={3} component={Card} className={cx(styles.card, className)}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {cardTitle}
      </Typography>
      <Typography variant="h5" component="h2">
        {value < 100 ? (value) : (<CountUp start={0} end={value} duration={2.75} separator="," />)}
      </Typography>
      <Typography variant="h6" component="h5" style={{ fontWeight: 600}}>
        {newValue > 0 ? "+" : "-"} {newValue % 1 !== 0 ? (newValue < 0 ? (newValue * -1) : (newValue)) : (<CountUp start={0} end={newValue > 0 ? newValue : newValue * -1} duration={2.75} separator="," />)}
      </Typography>
      <Typography color="textSecondary">
        {new Date(lastUpdate).toLocaleString('it-IT', options)}
      </Typography>
      <Typography variant="body2" component="p">
        {cardSubtitle}
      </Typography>
    </CardContent>
  </Grid>
);

export default CardComponent;
