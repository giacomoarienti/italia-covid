import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { REGIONS, regions } from '../../api';

import styles from './RegionPicker.module.css';

const Regions = ({ handleRegionChange }) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="Italia" onChange={(e) => handleRegionChange(e.target.value)}>
        <option value="Italia">Italia</option>
        {regions.map((region, i) => <option key={i} value={REGIONS[region].name}>{REGIONS[region].name}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Regions;
