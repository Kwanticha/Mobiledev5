import React,{useState} from "react";
import Categories from "./Categories"
import Menu from "./Menu"
import data from "./data";

const allCategories =["All",
...new Set(
  data.map((item)=>{
    return item.category;
  })
),
];

//const allCategories =[...new set (data(item =>item.categories))]

const App = () => {
      const [manuItems, setManuItems] = useState(data);
      
      const filterItems =(category)=>{
      if(category=== "All"){
        setManuItems(data)
      }
      else{
      const newItems = data.filter (
        (item) =>item.category === category
      )

      setManuItems(newItems)
}
      }
return (
    <div>
      <h2>Workshop 2 : Food Menu</h2>;
      <main>
        <section className="menu section">
          <div className="title">
    <h2>Our Menu</h2>
    <div className="underline"></div>
    </div>
    <Categories allCategories={allCategories} filterItems={filterItems}/>
    <Menu items ={manuItems}/>
        </section>
      </main>
    </div>
  );
};

export default App;
