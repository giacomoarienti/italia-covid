import React from "react";
import { MapContainer, TileLayer, Popup, Circle, useMap } from 'react-leaflet';
import { Typography } from '@material-ui/core';
import { REGIONS } from '../../api/';

import { objectIsEmpty } from '../../utils/';

import styles from './Map.module.css';
import "leaflet/dist/leaflet.css"

const casesTypes = {
  newConfirmed: {
    color: "blue",
    multiplier: 800,
  },
  newRecovered: {
    color: "green",
    multiplier: 800,
  },
  newDeaths: {
    color: "red",
    multiplier: 4000,
  },
  newIncrease: {
    color: "red",
    multiplier: 1000,
  },
};

const showDataOnMap = (data, type, region) => (
  region  !== 'Italia' ? (
    Object.keys(data[region]["provinces"]).map((province, i) => (
      <Circle
        key={i}
        center={REGIONS[region]["provinces"][province].coords}
        color={"red"} //casesTypes["newIncrease"].color
        fillOpacity={0.4}
        radius={Math.sqrt(data[region]["provinces"][province]["lastUpdate"]["increase"]) * casesTypes["newIncrease"].multiplier}
      >
        <Popup>
          <div className={styles.infocontainer}>
            <div className={styles.infoname}>{province}</div>
            <div className={styles.infoconfirmed}>
              Totale: {data[region]["provinces"][province]["lastUpdate"]["total"]}
            </div>
            <div className={styles.infoincrease}>
              Aumento: {data[region]["provinces"][province]["lastUpdate"]["increase"]}
            </div>
          </div>
        </Popup>      
      </Circle>
    ))
  ) : (
  Object.keys(data).map((region, i) => (
    <Circle
      key={i}
      center={REGIONS[region].coords}
      color={"red"} //casesTypes[type].color
      fillOpacity={0.4}
      radius={Math.sqrt(data[region]["lastUpdate"][type]) * casesTypes[type].multiplier}
    >
      <Popup>
        <div className={styles.infocontainer}>
          <div className={styles.infoname}>{region}</div>
          <div className={styles.infoconfirmed}>
            Contagi: {data[region]["lastUpdate"]["newConfirmed"]}
          </div>
          <div className={styles.inforecovered}>
            Guariti: {data[region]["lastUpdate"]["newRecovered"]}
          </div>
          <div className={styles.infodeaths}>
            Morti: {data[region]["lastUpdate"]["newDeaths"]}
          </div>
        </div>
      </Popup>      
    </Circle>
  ))
  )
)

function SetView ({coords, zoom}) {
  const map = useMap();
  map.setView(coords, zoom);
  return null;
}

const Map = ({ data, type, region}) => {
  if(objectIsEmpty(data)) {
    return (
      <div className={styles.mapcontainer}>
        <Typography className={styles.loading} gutterBottom variant="h5" component="h4">Caricamento...</Typography>
      </div>
    );
  }
  
  var state = {
    coords: [],
    zoom: 0,
  };
  
  if(region === "Italia") {
    state.coords = { lat: 42, lng: 13 };
    state.zoom = 6;
  } else {
    state.coords = REGIONS[region].coords;
    state.zoom = 7;
  }

  return (
    <div className={styles.mapcontainer}>
      <MapContainer 
      minZoom={5}
      maxZoom={8}
      scrollWheelZoom={false}
      style={{ height: "100%"}} 
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetView coords={state.coords} zoom={state.zoom}/>
        {showDataOnMap(data, type, region)}
      </MapContainer>
    </div>
  );
}

export default Map;