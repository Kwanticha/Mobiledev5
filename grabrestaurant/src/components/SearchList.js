import React from 'react'
import Card from './Card'

const SearchList = ({filteredRestaurants,handleDelete}) => {
    const filtered = filteredRestaurants.map((restaurants)=>{
       return( <Card 
         key={restaurants.id}
         restaurants={restaurants}
         handleDelete={handleDelete}/>
       )
    });
  return <>{filtered}</>;
  
}

export default SearchList
