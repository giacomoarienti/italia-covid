import axios from 'axios';
import {getPositivityRate} from '../utils/'

const DATA_URI = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json";
const REGIONS_URI = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json";
const VACCINES_URI = "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json";
const PROVINCES_URI = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json";

export const REGIONS = {
  "Abruzzo": {
    "name": "Abruzzo",
    "code": "ABR",
    "coords": {
      "lat": 42.192012,
      "lng": 13.728917
    },
    "provinces": {
      "L'Aquila": {
        "name": "L'Aquila",
        "coords": {
          "lat": 42.35122196,
          "lng": 13.39843823
        }
      },
      "Teramo": {
        "name": "Teramo",
        "coords": {
          "lat": 42.6589177,
          "lng": 13.70439971
        }
      },
      "Pescara": {
        "name": "Pescara",
        "coords": {
          "lat": 42.46458398,
          "lng": 14.21364822
        }
      },
      "Chieti": {
        "name": "Chieti",
        "coords": {
          "lat": 42.35103167,
          "lng": 14.16754574
        }
      }
    }
  },
  "Basilicata": {
    "name": "Basilicata",
    "code": "BAS",
    "coords": {
      "lat": 40.643077,
      "lng": 15.969988
    },
    "provinces": {
      "Potenza": {
        "name": "Potenza",
        "coords": {
          "lat": 40.63947052,
          "lng": 15.80514834
        }
      },
      "Matera": {
        "name": "Matera",
        "coords": {
          "lat": 40.66751177,
          "lng": 16.59792442
        }
      }
    }
  },
  "Calabria": {
    "name": "Calabria",
    "code": "CAL",
    "coords": {
      "lat": 38.111389,
      "lng": 15.661944
    },
    "provinces": {
      "Cosenza": {
        "name": "Cosenza",
        "coords": {
          "lat": 39.29308681,
          "lng": 16.25609692
        }
      },
      "Catanzaro": {
        "name": "Catanzaro",
        "coords": {
          "lat": 38.90597598,
          "lng": 16.59440194
        }
      },
      "Reggio di Calabria": {
        "name": "Reggio di Calabria",
        "coords": {
          "lat": 38.10922769,
          "lng": 15.6434527
        }
      },
      "Crotone": {
        "name": "Crotone",
        "coords": {
          "lat": 39.08036878,
          "lng": 17.12538864
        }
      },
      "Vibo Valentia": {
        "name": "Vibo Valentia",
        "coords": {
          "lat": 38.67624147,
          "lng": 16.10157414
        }
      }
    }
  },
  "Campania": {
    "name": "Campania",
    "code": "CAM",
    "coords": {
      "lat": 41.109947,
      "lng": 14.847514
    },
    "provinces": {
      "Caserta": {
        "name": "Caserta",
        "coords": {
          "lat": 41.07465878,
          "lng": 14.33240464
        }
      },
      "Benevento": {
        "name": "Benevento",
        "coords": {
          "lat": 41.12969987,
          "lng": 14.78151683
        }
      },
      "Napoli": {
        "name": "Napoli",
        "coords": {
          "lat": 40.83956555,
          "lng": 14.25084984
        }
      },
      "Avellino": {
        "name": "Avellino",
        "coords": {
          "lat": 40.91404699,
          "lng": 14.79528803
        }
      },
      "Salerno": {
        "name": "Salerno",
        "coords": {
          "lat": 40.67821961,
          "lng": 14.7594026
        }
      }
    }
  },
  "Emilia-Romagna": {
    "name": "Emilia-Romagna",
    "code": "EMR",
    "coords": {
      "lat": 44.596761,
      "lng": 11.21864
    },
    "provinces": {
      "Piacenza": {
        "name": "Piacenza",
        "coords": {
          "lat": 45.05193462,
          "lng": 9.692632596
        }
      },
      "Parma": {
        "name": "Parma",
        "coords": {
          "lat": 44.80107394,
          "lng": 10.32834985
        }
      },
      "Reggio nell'Emilia": {
        "name": "Reggio nell'Emilia",
        "coords": {
          "lat": 44.69735289,
          "lng": 10.63007973
        }
      },
      "Modena": {
        "name": "Modena",
        "coords": {
          "lat": 44.64600009,
          "lng": 10.92615487
        }
      },
      "Bologna": {
        "name": "Bologna",
        "coords": {
          "lat": 44.49436681,
          "lng": 11.3417208
        }
      },
      "Ferrara": {
        "name": "Ferrara",
        "coords": {
          "lat": 44.83599085,
          "lng": 11.61868934
        }
      },
      "Ravenna": {
        "name": "Ravenna",
        "coords": {
          "lat": 44.41722493,
          "lng": 12.19913936
        }
      },
      "Forlì-Cesena": {
        "name": "Forlì-Cesena",
        "coords": {
          "lat": 44.22268559,
          "lng": 12.04068608
        }
      },
      "Rimini": {
        "name": "Rimini",
        "coords": {
          "lat": 44.06090087,
          "lng": 12.5656295
        }
      }
    }
  },
  "Friuli Venezia Giulia": {
    "name": "Friuli Venezia Giulia",
    "code": "FVG",
    "coords": {
      "lat": 45.636111,
      "lng": 13.804167
    },
    "provinces": {
      "Udine": {
        "name": "Udine",
        "coords": {
          "lat": 46.06255516,
          "lng": 13.2348383
        }
      },
      "Gorizia": {
        "name": "Gorizia",
        "coords": {
          "lat": 45.94149817,
          "lng": 13.62212502
        }
      },
      "Trieste": {
        "name": "Trieste",
        "coords": {
          "lat": 45.6494354,
          "lng": 13.76813649
        }
      },
      "Pordenone": {
        "name": "Pordenone",
        "coords": {
          "lat": 45.95443546,
          "lng": 12.66002909
        }
      }
    }
  },
  "Lazio": {
    "name": "Lazio",
    "code": "LAZ",
    "coords": {
      "lat": 41.9,
      "lng": 12.716667
    },
    "provinces": {
      "Viterbo": {
        "name": "Viterbo",
        "coords": {
          "lat": 42.4173828,
          "lng": 12.10473416
        }
      },
      "Rieti": {
        "name": "Rieti",
        "coords": {
          "lat": 42.40488444,
          "lng": 12.86205939
        }
      },
      "Roma": {
        "name": "Roma",
        "coords": {
          "lat": 41.89277044,
          "lng": 12.48366722
        }
      },
      "Latina": {
        "name": "Latina",
        "coords": {
          "lat": 41.46759465,
          "lng": 12.90368482
        }
      },
      "Frosinone": {
        "name": "Frosinone",
        "coords": {
          "lat": 41.63964569,
          "lng": 13.35117161
        }
      }
    }
  },
  "Liguria": {
    "name": "Liguria",
    "code": "LIG",
    "coords": {
      "lat": 44.45,
      "lng": 8.766667
    },
    "provinces": {
      "Imperia": {
        "name": "Imperia",
        "coords": {
          "lat": 43.88570648,
          "lng": 8.027850298
        }
      },
      "Savona": {
        "name": "Savona",
        "coords": {
          "lat": 44.30750461,
          "lng": 8.481108654
        }
      },
      "Genova": {
        "name": "Genova",
        "coords": {
          "lat": 44.41149314,
          "lng": 8.9326992
        }
      },
      "La Spezia": {
        "name": "La Spezia",
        "coords": {
          "lat": 44.10704991,
          "lng": 9.8281897
        }
      }
    }
  },
  "Lombardia": {
    "name": "Lombardia",
    "code": "LOM",
    "coords": {
      "lat": 45.585556,
      "lng": 9.930278
    },
    "provinces": {
      "Varese": {
        "name": "Varese",
        "coords": {
          "lat": 45.81701677,
          "lng": 8.822868344
        }
      },
      "Como": {
        "name": "Como",
        "coords": {
          "lat": 45.8099912,
          "lng": 9.085159546
        }
      },
      "Sondrio": {
        "name": "Sondrio",
        "coords": {
          "lat": 46.17099261,
          "lng": 9.87147489
        }
      },
      "Milano": {
        "name": "Milano",
        "coords": {
          "lat": 45.46679409,
          "lng": 9.190347404
        }
      },
      "Bergamo": {
        "name": "Bergamo",
        "coords": {
          "lat": 45.69441368,
          "lng": 9.668424528
        }
      },
      "Brescia": {
        "name": "Brescia",
        "coords": {
          "lat": 45.53993052,
          "lng": 10.21910323
        }
      },
      "Pavia": {
        "name": "Pavia",
        "coords": {
          "lat": 45.18509264,
          "lng": 9.160157191
        }
      },
      "Cremona": {
        "name": "Cremona",
        "coords": {
          "lat": 45.13336675,
          "lng": 10.02420865
        }
      },
      "Mantova": {
        "name": "Mantova",
        "coords": {
          "lat": 45.15726772,
          "lng": 10.79277363
        }
      },
      "Lecco": {
        "name": "Lecco",
        "coords": {
          "lat": 45.85575781,
          "lng": 9.393392246
        }
      },
      "Lodi": {
        "name": "Lodi",
        "coords": {
          "lat": 45.31440693,
          "lng": 9.503720769
        }
      },
      "Monza e della Brianza": {
        "name": "Monza e della Brianza",
        "coords": {
          "lat": 45.58439043,
          "lng": 9.273582472
        }
      }
    }
  },
  "Marche": {
    "name": "Marche",
    "code": "MAR",
    "coords": {
      "lat": 43.616667,
      "lng": 13.516667
    },
    "provinces": {
      "Pesaro e Urbino": {
        "name": "Pesaro e Urbino",
        "coords": {
          "lat": 43.91014021,
          "lng": 12.91345989
        }
      },
      "Ancona": {
        "name": "Ancona",
        "coords": {
          "lat": 43.61675973,
          "lng": 13.5188753
        }
      },
      "Macerata": {
        "name": "Macerata",
        "coords": {
          "lat": 43.30023926,
          "lng": 13.45307182
        }
      },
      "Ascoli Piceno": {
        "name": "Ascoli Piceno",
        "coords": {
          "lat": 42.85322304,
          "lng": 13.57691127
        }
      },
      "Fermo": {
        "name": "Fermo",
        "coords": {
          "lat": 43.16058534,
          "lng": 13.71839535
        }
      }
    }
  },
  "Molise": {
    "name": "Molise",
    "code": "MOL",
    "coords": {
      "lat": 41.6997,
      "lng": 14.6111
    },
    "provinces": {
      "Campobasso": {
        "name": "Campobasso",
        "coords": {
          "lat": 41.55774754,
          "lng": 14.65916051
        }
      },
      "Isernia": {
        "name": "Isernia",
        "coords": {
          "lat": 41.58800826,
          "lng": 14.22575407
        }
      }
    }
  },
  "P.A. Bolzano": {
    "name": "P.A. Bolzano",
    "code": "PAB",
    "coords": {
      "lat": 46.5,
      "lng": 11.35
    },
    "provinces": {
      "Bolzano": {
        "name": "Bolzano",
        "coords": {
          "lat": 46.49933453,
          "lng": 11.35662422
        }
      }
    }
  },
  "P.A. Trento": {
    "name": "P.A. Trento",
    "code": "PAT",
    "coords": {
      "lat": 46.066667,
      "lng": 11.116667
    },
    "provinces": {
      "Trento": {
        "name": "Trento",
        "coords": {
          "lat": 46.06893511,
          "lng": 11.12123097
        }
      }
    }
  },
  "Piemonte": {
    "name": "Piemonte",
    "code": "PIE",
    "coords": {
      "lat": 45.066667,
      "lng": 7.7
    },
    "provinces": {
      "Torino": {
        "name": "Torino",
        "coords": {
          "lat": 45.0732745,
          "lng": 7.680687483
        }
      },
      "Vercelli": {
        "name": "Vercelli",
        "coords": {
          "lat": 45.32398135,
          "lng": 8.423234312
        }
      },
      "Novara": {
        "name": "Novara",
        "coords": {
          "lat": 45.44588506,
          "lng": 8.621915884
        }
      },
      "Cuneo": {
        "name": "Cuneo",
        "coords": {
          "lat": 44.39329625,
          "lng": 7.551171632
        }
      },
      "Asti": {
        "name": "Asti",
        "coords": {
          "lat": 44.89912921,
          "lng": 8.204142547
        }
      },
      "Alessandria": {
        "name": "Alessandria",
        "coords": {
          "lat": 44.91297351,
          "lng": 8.615401155
        }
      },
      "Biella": {
        "name": "Biella",
        "coords": {
          "lat": 45.5665112,
          "lng": 8.054082167
        }
      },
      "Verbano-Cusio-Ossola": {
        "name": "Verbano-Cusio-Ossola",
        "coords": {
          "lat": 45.9214455,
          "lng": 8.551078753
        }
      }
    }
  },
  "Puglia": {
    "name": "Puglia",
    "code": "PUG",
    "coords": {
      "lat": 41.008611,
      "lng": 16.512778
    },
    "provinces": {
      "Foggia": {
        "name": "Foggia",
        "coords": {
          "lat": 41.46226865,
          "lng": 15.54305094
        }
      },
      "Bari": {
        "name": "Bari",
        "coords": {
          "lat": 41.12559576,
          "lng": 16.86736689
        }
      },
      "Taranto": {
        "name": "Taranto",
        "coords": {
          "lat": 40.47354739,
          "lng": 17.23237181
        }
      },
      "Brindisi": {
        "name": "Brindisi",
        "coords": {
          "lat": 40.63848545,
          "lng": 17.94601575
        }
      },
      "Lecce": {
        "name": "Lecce",
        "coords": {
          "lat": 40.35354285,
          "lng": 18.1718973
        }
      },
      "Barletta-Andria-Trani": {
        "name": "Barletta-Andria-Trani",
        "coords": {
          "lat": 41.22705039,
          "lng": 16.29520432
        }
      }
    }
  },
  "Sardegna": {
    "name": "Sardegna",
    "code": "SAR",
    "coords": {
      "lat": 40,
      "lng": 9
    },
    "provinces": {
      "Sassari": {
        "name": "Sassari",
        "coords": {
          "lat": 40.72667657,
          "lng": 8.559667131
        }
      },
      "Nuoro": {
        "name": "Nuoro",
        "coords": {
          "lat": 40.32318834,
          "lng": 9.330296393
        }
      },
      "Cagliari": {
        "name": "Cagliari",
        "coords": {
          "lat": 39.21531192,
          "lng": 9.110616306
        }
      },
      "Oristano": {
        "name": "Oristano",
        "coords": {
          "lat": 39.90381075,
          "lng": 8.591183151
        }
      },
      "Sud Sardegna": {
        "name": "Sud Sardegna",
        "coords": {
          "lat": 39.16641462,
          "lng": 8.526242676
        }
      }
    }
  },
  "Sicilia": {
    "name": "Sicilia",
    "code": "SIC",
    "coords": {
      "lat": 37.5,
      "lng": 14
    },
    "provinces": {
      "Trapani": {
        "name": "Trapani",
        "coords": {
          "lat": 38.01850065,
          "lng": 12.51365684
        }
      },
      "Palermo": {
        "name": "Palermo",
        "coords": {
          "lat": 38.11569725,
          "lng": 13.3623567
        }
      },
      "Messina": {
        "name": "Messina",
        "coords": {
          "lat": 38.19395845,
          "lng": 15.55572302
        }
      },
      "Agrigento": {
        "name": "Agrigento",
        "coords": {
          "lat": 37.30971088,
          "lng": 13.5845749
        }
      },
      "Caltanissetta": {
        "name": "Caltanissetta",
        "coords": {
          "lat": 37.49213171,
          "lng": 14.06184973
        }
      },
      "Enna": {
        "name": "Enna",
        "coords": {
          "lat": 37.56705701,
          "lng": 14.27909375
        }
      },
      "Catania": {
        "name": "Catania",
        "coords": {
          "lat": 37.50287803,
          "lng": 15.08704691
        }
      },
      "Ragusa": {
        "name": "Ragusa",
        "coords": {
          "lat": 36.92509198,
          "lng": 14.73069891
        }
      },
      "Siracusa": {
        "name": "Siracusa",
        "coords": {
          "lat": 37.05991687,
          "lng": 15.29333182
        }
      }
    }
  },
  "Toscana": {
    "name": "Toscana",
    "code": "TOS",
    "coords": {
      "lat": 43.771389,
      "lng": 11.254167
    },
    "provinces": {
      "Massa Carrara": {
        "name": "Massa Carrara",
        "coords": {
          "lat": 44.03674425,
          "lng": 10.14173829
        }
      },
      "Lucca": {
        "name": "Lucca",
        "coords": {
          "lat": 43.84432283,
          "lng": 10.50151366
        }
      },
      "Pistoia": {
        "name": "Pistoia",
        "coords": {
          "lat": 43.933465,
          "lng": 10.91734146
        }
      },
      "Firenze": {
        "name": "Firenze",
        "coords": {
          "lat": 43.76923077,
          "lng": 11.25588885
        }
      },
      "Livorno": {
        "name": "Livorno",
        "coords": {
          "lat": 43.55234873,
          "lng": 10.3086781
        }
      },
      "Pisa": {
        "name": "Pisa",
        "coords": {
          "lat": 43.71553206,
          "lng": 10.40127259
        }
      },
      "Arezzo": {
        "name": "Arezzo",
        "coords": {
          "lat": 43.46642752,
          "lng": 11.88228844
        }
      },
      "Siena": {
        "name": "Siena",
        "coords": {
          "lat": 43.31816374,
          "lng": 11.33190988
        }
      },
      "Grosseto": {
        "name": "Grosseto",
        "coords": {
          "lat": 42.76026758,
          "lng": 11.11356398
        }
      },
      "Prato": {
        "name": "Prato",
        "coords": {
          "lat": 43.88062274,
          "lng": 11.09703315
        }
      }
    }
  },
  "Umbria": {
    "name": "Umbria",
    "code": "UMB",
    "coords": {
      "lat": 43.1121,
      "lng": 12.3888
    },
    "provinces": {
      "Perugia": {
        "name": "Perugia",
        "coords": {
          "lat": 43.10675841,
          "lng": 12.38824698
        }
      },
      "Terni": {
        "name": "Terni",
        "coords": {
          "lat": 42.56071258,
          "lng": 12.6466875
        }
      }
    }
  },
  "Valle d'Aosta": {
    "name": "Valle d'Aosta",
    "code": "VDA",
    "coords": {
      "lat": 45.746944,
      "lng": 7.439167
    },
    "provinces": {
      "Aosta": {
        "name": "Aosta",
        "coords": {
          "lat": 45.73750286,
          "lng": 7.320149366
        }
      }
    }
  },
  "Veneto": {
    "name": "Veneto",
    "code": "VEN",
    "coords": {
      "lat": 45.733333,
      "lng": 11.85
    },
    "provinces": {
      "Verona": {
        "name": "Verona",
        "coords": {
          "lat": 45.43839046,
          "lng": 10.99352685
        }
      },
      "Vicenza": {
        "name": "Vicenza",
        "coords": {
          "lat": 45.547497,
          "lng": 11.54597109
        }
      },
      "Belluno": {
        "name": "Belluno",
        "coords": {
          "lat": 46.13837528,
          "lng": 12.21704167
        }
      },
      "Treviso": {
        "name": "Treviso",
        "coords": {
          "lat": 45.66754571,
          "lng": 12.24507363
        }
      },
      "Venezia": {
        "name": "Venezia",
        "coords": {
          "lat": 45.43490485,
          "lng": 12.33845213
        }
      },
      "Padova": {
        "name": "Padova",
        "coords": {
          "lat": 45.40692987,
          "lng": 11.87608718
        }
      },
      "Rovigo": {
        "name": "Rovigo",
        "coords": {
          "lat": 45.07107289,
          "lng": 11.79007
        }
      }
    }
  }
};

export const regions = Object.keys(REGIONS);

export const fetchItaly = async() => {
  try {
    const data = await (await axios.get(DATA_URI)).data;
    
    var ItalyData = {"Italia": {"dates":{}}};

    data.forEach(date => {
      var dataTime = (date.data).split("T")[0];
      ItalyData["Italia"]["dates"][dataTime] = {confirmed: date.totale_casi, recovered: date.dimessi_guariti, deaths: date.deceduti, hospitalised: date.ricoverati_con_sintomi, tests: date.tamponi, newConfirmed: date.nuovi_positivi, date: dataTime};
    });
    
    const dates = Object.keys(ItalyData["Italia"]["dates"]);
    dates.forEach((date, i) => {
      const data = ItalyData["Italia"]["dates"][date];
      
      var newData = {};
      if(i === 0) {
        newData = {newRecovered: data.recovered, newDeaths: data.deaths, newHospitalised: data.hospitalised, newTests: data.tests}
      } else {
        const yesterday = ItalyData["Italia"]["dates"][dates[i-1]];
        newData = {newRecovered: (data.recovered - yesterday.recovered), newDeaths: (data.deaths - yesterday.deaths), newHospitalised: (data.hospitalised - yesterday.hospitalised), newTests: (data.tests - yesterday.tests)}
      }
      ItalyData["Italia"]["dates"][date] = {...data, ...newData};


      const positivity = getPositivityRate(ItalyData["Italia"]["dates"], i);
      ItalyData["Italia"]["dates"][date] = {...ItalyData["Italia"]["dates"][date], ...positivity};
      
    });

    ItalyData["Italia"]["lastUpdate"] = ItalyData["Italia"]["dates"][dates[dates.length-1]];

    return ItalyData;
  } catch (error) {
    return error;
  }
};

export const fetchRegions = async() => {
  try {
    const response = await (await axios.get(REGIONS_URI)).data;
    var regionsData = {};

    regions.forEach(region => {
      regionsData[region] = {};
      regionsData[region]["dates"] = {};
    });
    
    response.forEach(date => {
      var dataTime = (date.data).split("T")[0];
      regionsData[date.denominazione_regione]["dates"][dataTime] = {confirmed: date.totale_casi, recovered: date.dimessi_guariti, deaths: date.deceduti, hospitalised: date.ricoverati_con_sintomi, tests: date.tamponi, newConfirmed: date.nuovi_positivi, date: dataTime};
    });
    
    regions.forEach(region => {
      const dates = Object.keys(regionsData[region]["dates"]);
      dates.forEach((date, i) => {
        const data = regionsData[region]["dates"][date];
        
        var newData = {};
        if(i === 0) {
          newData = {newRecovered: data.recovered, newDeaths: data.deaths, newHospitalised: data.hospitalised, newTests: data.tests}
        } else {
          const yesterday = regionsData[region]["dates"][dates[i-1]];
          newData = {newRecovered: (data.recovered - yesterday.recovered), newDeaths: (data.deaths - yesterday.deaths), newHospitalised: (data.hospitalised - yesterday.hospitalised), newTests: (data.tests - yesterday.tests)}
        }
        regionsData[region]["dates"][date] = {...data, ...newData};
  
        const positivity = getPositivityRate(regionsData[region]["dates"], i);
        regionsData[region]["dates"][date] = {...regionsData[region]["dates"][date], ...positivity};        
      });

      regionsData[region]["lastUpdate"] = regionsData[region]["dates"][dates[dates.length-1]];
    });

    return regionsData;
  } catch (error) {
    return error;
  }
};

export const fetchProvinces = async() => {
  try {
    const response = await (await axios.get(PROVINCES_URI)).data;
    var provincesData = {};

    regions.forEach((region) => {
      const provinces = Object.keys(REGIONS[region]["provinces"]);
      provincesData[region] = {};
      provincesData[region]["provinces"] = {};
      provinces.forEach((province) => {
        provincesData[region]["provinces"][province] = {};
        provincesData[region]["provinces"][province]["dates"] = {};
        provincesData[region]["provinces"][province]["lastUpdate"] = {};
      });
    });

    response.forEach((date, i) => {
      const provincia = date.denominazione_provincia;
      const region = date.denominazione_regione;

      if(!provincesData[region]["provinces"][provincia]) {
        return;
      }

      const dataTime = (date.data).split("T")[0];
      provincesData[region]["provinces"][provincia]["dates"][dataTime] = {total: date.totale_casi, increase: 0, date: dataTime};
    });

    regions.forEach((region) => {
      const provinces = Object.keys(REGIONS[region]["provinces"]);
      provinces.forEach((provincia) => {
        const dates = Object.keys(provincesData[region]["provinces"][provincia]["dates"]);
        dates.forEach((date, i) => {
          if(i > 0) {
            const yesterday = provincesData[region]["provinces"][provincia]["dates"][dates[i-1]].total
            const today = provincesData[region]["provinces"][provincia]["dates"][date].total;
            provincesData[region]["provinces"][provincia]["dates"][date] = {total: today, increase: (today - yesterday), date: date};
          }
        });
        provincesData[region]["provinces"][provincia]["lastUpdate"] = provincesData[region]["provinces"][provincia]["dates"][dates[dates.length-1]];
      });
    });

    return provincesData;

  } catch(error) {
    return error;
  }
};   

export const fetchVaccines = async() => {
  try {
    const data = await (await axios.get(VACCINES_URI)).data.data;
    var regionsData = {};

    regions.forEach(region => {
      regionsData[region] = {};
      regionsData[region]["vaccines"] = {};
    });
    
    regionsData["Italia"] = {};
    regionsData["Italia"]["vaccines"] = {deliveredDose: 0, somministratedDose: 0};

    var total = {
      delivered: 0,
      somministrated: 0,
      date: ""
    }

    data.forEach(region => {
      regions.forEach(r => {
        if(REGIONS[r].code === region.area) {
          regionsData[REGIONS[r].name]["vaccines"] = {deliveredDose: region.dosi_consegnate, somministratedDose: region.dosi_somministrate, date: (region.ultimo_aggiornamento).split("T")[0]};
          total.delivered += region.dosi_consegnate; 
          total.somministrated += region.dosi_somministrate;
          total.date = (region.ultimo_aggiornamento).split("T")[0];
        }
      })
    });

    regionsData["Italia"]["vaccines"] = {deliveredDose: total.delivered, somministratedDose: total.somministrated, date: total.date};

    return regionsData;
  } catch (error) {
    return error;
  }
};
