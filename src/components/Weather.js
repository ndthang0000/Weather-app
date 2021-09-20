import React, {  useState } from 'react';



function Weather({dataWeather,changLocation}) {
    
    let srcImg=`http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`
    const [d,setD]=useState(new Date());
    setInterval(()=>{
        setD(new Date())
    },1000)
    function checkTime(i) 
    {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    return (
        <div>
            <div id="date">{d.getDay()+1===8?"Chủ Nhật":'Thứ '+(d.getDay()+1)}, Ngày {d.getDate()}, Năm {d.getFullYear()}, Việt Nam</div>
            <div className="clock"> {d.getHours()}:{checkTime(d.getMinutes())}:{checkTime(d.getSeconds())}</div>
            <select name="" id="select-city" onChange={(e)=>changLocation(e.target.value)}>
                <option value="hanoi">Hà Nội</option>
                <option value="haiphong">Hải Phòng</option>
                <option value="saigon">Hồ Chí Minh</option>
                <option value="danang">Đà Nẵng</option>
                <option value="hue">Huế</option>
            </select>
            
            <h1 className="temp">{(dataWeather.main.temp-273).toFixed(0)}<span className="icon-temp">&#870;</span> C</h1>
            
            <div id="img-png">
                <img src={srcImg} alt=""/>
            </div>
            <h2>{dataWeather.weather[0].main} : {dataWeather.weather[0].description}
                <br/>
                Wind Speed : {dataWeather.wind.speed}
            </h2>
            <hr className="endline"></hr>
            <div id="main-parameter">
                <span>Feel like : {dataWeather.main.feels_like}</span>
                <span>Grnd level :{dataWeather.main.grnd_level}</span>
                <span>Humidity : {dataWeather.main.pressure}</span>
            </div>
            <div id="main-parameter">
                <span>Sea Level : {dataWeather.main.sea_level}</span>
                <span>Temp :{dataWeather.main.temp}</span>
                <span>Temp min : {dataWeather.main.temp_min}</span>
            </div>
            <div id="main-parameter">
                <span>Feel like : {dataWeather.main.feels_like}</span>
                <span>Grnd level :{dataWeather.main.grnd_level}</span>
                <span>Temp max : {dataWeather.main.temp_max}</span>
            </div>
            
        </div>
    );
}

export default Weather;