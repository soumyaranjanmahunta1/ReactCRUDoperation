import React from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
export default function AddCity() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    countryName: "",
    cityName: "",
    population:"",
  });
    const AddCities = async() => {
      const response = await fetch("http://localhost:8000/cities", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      alert("City Added Successfully")
    console.log(response.json());
    setdata({  countryName: "",
    cityName: "",
      population: "",
    });
      navigate("/");
    }
  return (
      <div>
          <h1>AddCity</h1>
          <div style={{
              display: "grid",
              justifyContent:"center",
              gap:"10px"
          }}>
      <input value={data.cityName} onChange={(e)=>{setdata({ ...data, cityName: e.target.value });}} type="text" id=""  name="login" placeholder="City Name"/>
      <input value={data.population} onChange={(e)=>{setdata({ ...data,population: e.target.value})}} type="number" id=""  name="login" placeholder="Population"/>
      <input value={data.countryName} onChange={(e)=>{setdata({ ...data,countryName: e.target.value})}} type="text" id=""  name="login" placeholder="Country Name"/>
      <button onClick={AddCities} type="button" class="btn btn-success">ADD</button>
          </div>
    </div>
  )
}
