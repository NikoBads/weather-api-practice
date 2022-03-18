import React from "react";
import axios from "axios";

const WeatherApp = () => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=25.855374&lon=-80.193103&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
};

export default WeatherApp;
