import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './DataPicker.module.css';

const types = [
  {
    value: "newConfirmed",
    name: "Contagi",
	},
  {
    value: "newRecovered",
    name: "Guariti",
  },
  {
    value: "newDeaths",
    name: "Morti",
  }
];

const Datas = ({ handleDataChange, defaultSelected}) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue={defaultSelected} onChange={(e) => handleDataChange(e.target.value)}>
        {types.map((type, i) => (
          <option key={i} value={type.value}>{type.name}</option>
        ))
        }
      </NativeSelect>
    </FormControl>
  );
};

export default Datas;
