import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const res = await axios.get("http://localhost:5000/apis/restaurants");
        setRestaurants(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllRestaurants();
  }, []);
  const handleDelete = async (id) =>{
  try{
    await axios.delete(`http://localhost:5000/apis/restaurants/${id}`);
    window.location.reload()
  } catch (error) {
    console.log(error);


  }
  }
  return (
    <div className="container">
      <h1> Grab Restaurant </h1>
      <div className="row">
        <div className="restaurants">
          {restaurants.map((restaurants) => {
            return (
              <div className="card" 
               style ={{width:"18rem"}} key={restaurants.id}>
                <img
                  src={restaurants.imageurl}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="title">{restaurants.name}</h5>
                  <p className="card-text">{restaurants.type}</p>
                  <Link to="" className="btn btn-danger px-2" onClick={()=>handleDelete(restaurants.id)}>
                    {" "}
                    Delete{" "}
                  </Link>
                   {" "}
                  <Link
                    to={"/Update/" + restaurants.id}
                    className="btn btn-warning px-2"
                  >
                    {" "}
                    Edite{" "}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
