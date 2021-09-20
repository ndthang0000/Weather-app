import React from 'react';
import Menu from './Menu'
import Weather from './Weather';

import {CircularProgress} from '@material-ui/core';

function Home({dataWeather,changLocation}) {
    console.log(dataWeather);
    return (
        <div>
            <Menu/>
            <div className="Home-content">{dataWeather===undefined?<CircularProgress color="secondary" />:<Weather dataWeather={dataWeather}  changLocation={changLocation}/>}
            </div>
            
        </div>
    );
}

export default Home;