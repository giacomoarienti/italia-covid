import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { REGIONS } from '../../api';

import styles from './ProvincePicker.module.css';

const Provinces = ({ handleProvinceChange, defaultSelected, region }) => {
  const provinces = Object.keys(REGIONS[region].provinces);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue={defaultSelected} onChange={(e) => handleProvinceChange(e.target.value)}>
        {provinces.map((province, i) => <option key={i} value={REGIONS[region]["provinces"][province].name}>{REGIONS[region]["provinces"][province].name}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Provinces;
