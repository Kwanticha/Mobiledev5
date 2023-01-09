import React from 'react' //rafc
import {Link} from 'react-router-dom'

const Card = ({restaurants,handleDelete}) => {
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
    
     
  

        }
export default Card
