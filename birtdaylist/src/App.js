import React, {useState} from "react";
import List from "./List"
import data from "./data"

const App = () => {
  const [people, setPeople] = useState(data)
  
  
  const clearAll =()=> {
        setPeople([])
  }

  return (
    <div>
      <h1>Workshop 1:Birthday List Project</h1>
      <main>
        <section className="container">
          <h3>{people.length} Birthday today</h3>
          <List people={people}/>
          <button onClick={clearAll}>Clear All</button>
        </section>
      </main>
    </div>
  );
};


export default App;
//useState return is array 
