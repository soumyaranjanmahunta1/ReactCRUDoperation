import React, { useState } from 'react'

export default function AddCountry() {
  const [data, setdata] = useState({countryName:""});
  const AddCountries = async() => {
    const response = await fetch("http://localhost:8000/countries", {
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
    console.log(response.json());
      alert("Country Added Successfully")
    setdata({ countryName: "" });
  }
  return (
      <div>
          <h1>AddCountry</h1>
          <div style={{
              display: "grid",
              justifyContent:"center",
              gap:"10px"
          }}>
              <input value={data.countryName} onChange={(e)=>{setdata({ ...data,countryName: e.target.value})}} type="text" id=""  name="login" placeholder="Country Name"/>
      <button onClick={AddCountries} type="button" class="btn btn-success">ADD</button>
          </div>
    </div>
  )
}
