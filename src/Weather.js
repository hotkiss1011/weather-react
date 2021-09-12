import React from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Weather (props) {
    function handleResponse(response) {
        alert(`The weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`)
    }

    let apiKey = "05992a658e151609dfa497fc6c2796f2";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
    return (
        <Loader
        type = "Puff"
        color = "#008FFF"
        height = {100}
        width = {100}
        timeout = {3000}
        />
    );
}