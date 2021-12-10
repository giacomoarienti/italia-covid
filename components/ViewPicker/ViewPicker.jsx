import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './ViewPicker.module.css';

const views = [
  {
    value: "week",
    name: "Settimana",
	},
  {
    value: "month",
    name: "Mese",
  },
  {
    value: "year",
    name: "Anno",
  }
];

const Views = ({ handleViewChange, defaultSelected }) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue={defaultSelected} onChange={(e) => handleViewChange(e.target.value)}>
        {views.map((view, i) => (
          <option key={i} value={view.value}>{view.name}</option>
        ))
        }
      </NativeSelect>
    </FormControl>
  );
};

export default Views;
