import React, { useEffect, useState } from "react";

export default function Home() {
  const [jsondata, setjsonData] = useState([]);
  const [updatedata, setupdatedata] = useState({
    countryName: "",
    cityName: "",
    population: "",
    id:"",
  });
  const getdata = async () => {
    fetch("http://localhost:8000/cities")
      .then((response) => response.json())
      .then((data) => setjsonData(data));
  };
  useEffect(() => {
    getdata();
  }, []);
  const deleteCity = (id) => {
    fetch("http://localhost:8000/cities/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((data) => console.log(data));
    getdata();
  };
  const handelUpdate = (id) => {
    console.log(updatedata);
    fetch(`http://localhost:8000/cities/` + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedata),
    }).then((response) => response.json());
  }
  return (
    <div>
      <h1>Home</h1>
      <div>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Country</th>
              <th scope="col">City</th>
              <th scope="col">Population</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {jsondata.map((el) => {
              return (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.countryName}</td>
                  <td>{el.cityName}</td>
                  <td>{el.population}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        setupdatedata({
                          countryName: el.countryName,
                          cityName: el.cityName,
                          population: el.population,
                          id:el.id,
                        });
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td onClick={() => deleteCity(el.id)}>Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Update
              </h5>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              class="modal-body"
              style={{
                display: "grid",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <input
                value={updatedata.cityName}
                onChange={(e) => {
                  setupdatedata({ ...updatedata, cityName: e.target.value });
                }}
                type="text"
                id=""
                name="login"
                placeholder="City Name"
              />
              <input
                value={updatedata.population}
                onChange={(e) => {
                  setupdatedata({ ...updatedata, population: e.target.value });
                }}
                type="number"
                id=""
                name="login"
                placeholder="Population"
              />
              <input
                value={updatedata.countryName}
                onChange={(e) => {
                  setupdatedata({ ...updatedata, countryName: e.target.value });
                }}
                type="text"
                id=""
                name="login"
                placeholder="Country Name"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => handelUpdate(updatedata.id)}
                type="button"
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
