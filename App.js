import React from 'react';

import { Cards, RegionPicker, ProvincePicker, ViewPicker, TypePicker, DataPicker, Chart, Map } from './components';
import { fetchItaly, fetchRegions, fetchProvinces, fetchVaccines } from './api/';

import { objectIsEmpty } from './utils/';

import styles from './App.module.css';
import image from './images/logo.png';

class App extends React.Component {
  state = {
    dataItaly: {},
    dataRegions: {},
    dataProvinces: {},
    dataVaccines: {},

    region: 'Italia',
    province: '',

    view: 'week',
    type: 'confirmeds',
    dataType: 'newConfirmed',
  }

  async componentDidMount() {
    const data = await fetchItaly();
    this.setState({dataItaly: data});
  }

  fetchRegionsData = async() => {
    const data = await fetchRegions();
    this.setState({dataRegions: data});
  }

  fetchProvincesData = async() => {
    const data = await fetchProvinces();
    this.setState({dataProvinces: data});
  }

  fetchVaccinesData = async() => {
    const data = await fetchVaccines();
    this.setState({dataVaccines: data});
  }

  handleRegionChange = async (region) => {
    if(objectIsEmpty(this.state.dataRegions)) {
      this.fetchRegionsData();
    }
    this.setState({region: region, province: ''});
  }

  handleProvinceChange = async (province) => {
    if(objectIsEmpty(this.state.dataProvinces)) {
      this.fetchProvincesData();
    }
    this.setState({province: province});
  }

  handleViewChange = (view) => {
    this.setState({view});
  }

  handleTypeChange = async (type) => {
    this.setState({type: type});
  }

  handleDataChange = (dataType) => {
    this.setState({dataType});
  }

  render() {
    const { dataItaly, dataRegions, dataProvinces, dataVaccines, region, province, type, view, dataType} = this.state;

    var data = region === "Italia" ? dataItaly : dataRegions;

    switch(type)
    {
      case "vaccines":
        if(objectIsEmpty(this.state.dataVaccines)) {
          this.fetchVaccinesData();
        }
        break;

      case "map":
        if(objectIsEmpty(dataRegions)) {
          this.fetchRegionsData();
        }
        if(objectIsEmpty(dataProvinces) && region !== "Italia") {
          this.fetchProvincesData();
        }
        break;
      
      case "provinces":
        if(objectIsEmpty(dataProvinces)) {
          this.fetchProvincesData();
        }
        break;

      default:
        break;
    }

    var graph = null;
    switch(type) {
      case "map":
        graph = (
          <div className={styles.graph}>
            <div className={styles.grid}>
              {region === "Italia" ? (
                <TypePicker handleTypeChange={this.handleTypeChange} defaultSelected={type} dontShow="provinces"/>
              ) : (
                <TypePicker handleTypeChange={this.handleTypeChange} defaultSelected={type}/>
              )
              }
              { region === "Italia" && 
                <DataPicker handleDataChange={this.handleDataChange} defaultSelected={dataType}/> 
              }
            </div>
            <Map data={region === "Italia" ? dataRegions : dataProvinces} type={dataType} region={region}/>
          </div>
        )
        break;

      case "provinces":
        graph = ( 
          <div className={styles.graph}>
            <div className={styles.grid}>
              <TypePicker handleTypeChange={this.handleTypeChange} defaultSelected={type}/>
              <ProvincePicker handleProvinceChange={this.handleProvinceChange} defaultSelected={province} region={region}/>
            </div>
            <Chart data={dataProvinces[region]} type={type} view={'month'} zone={province}/>
          </div>
        );
        break;

      case "vaccines":
          graph = (
            <div className={styles.graph}>
              <div className={styles.grid}>
                {region === "Italia" ?
                  <TypePicker handleTypeChange={this.handleTypeChange} defaultSelected={type} dontShow="provinces"/>
                  : 
                  <TypePicker handleTypeChange={this.handleTypeChange} defaultSelected={type}/>
                }
              </div>
              <Chart data={type !== "vaccines" ? data[region] : dataVaccines[region]} type={type} view={view}/>
            </div>
          )
        break;

      default:
        graph = (
          <div className={styles.graph}>
            <div className={styles.grid}>
              {region === "Italia" ?
                <TypePicker handleTypeChange={this.handleTypeChange} defaultSelected={type} dontShow="provinces"/>
                : 
                <TypePicker handleTypeChange={this.handleTypeChange} defaultSelected={type}/>
              }
              <ViewPicker handleViewChange={this.handleViewChange} defaultSelected={view}/>
            </div>
            <Chart data={type !== "vaccines" ? data[region] : dataVaccines[region]} type={type} view={view}/>
          </div>
        )
        break;
    }

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <RegionPicker handleRegionChange={this.handleRegionChange} />
        <Cards data={data[region]} region={region}/>
        {graph}
      </div>
    );
  }
}

export default App;