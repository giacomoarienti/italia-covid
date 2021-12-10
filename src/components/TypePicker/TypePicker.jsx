import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './TypePicker.module.css';

const types = [
  {
    value: "confirmeds",
    name: "Infetti e Guariti",
  },
  {
    value: "deaths",
    name: "Morti e Ricoveri",
  },
  {
    value: "vaccines",
    name: "Vaccini",
  },
  {
    value: "provinces",
    name: "Province",
  },
  {
    value: "map",
    name: "Mappa",
  },
];

const Types = ({ handleTypeChange, defaultSelected, dontShow}) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue={defaultSelected} onChange={(e) => handleTypeChange(e.target.value)}>
        {types.map((type, i) => (
            type.value !== dontShow ? (
              <option key={i} value={type.value}>{type.name}</option>
            ) : (
              null
            )
          ))
        }
      </NativeSelect>
    </FormControl>
  );
};

export default Types;
