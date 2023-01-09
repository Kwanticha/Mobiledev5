import logo from './logo.svg';
import './App.css';
import Post from './Post';
import {PostFunction} from "./PostFunction";
import StatelnClass from "./StatelnClass";

function App() {
    return(
   /* <div className = "root" >
    <div className="App">
     <Post content ="this is a class componen" name ="Kwanticha Phanpetch"/>
     < Post content = "แตงโมพูดมาก" name = "Kwanticha Phanpetch" / >
    <hr/>
    <h2>Function Component</h2>
     <PostFunction
         content ="ไอแฮ่มมันบ้า"
         name = "Me"
      />

     </div>
     <Post/>
    </div>
   
   <div className = "root">
    < div className = "App" >
  <h2>StatelnClass Component</h2>
   <StatelnClass name = "Kwanticha Phanpetch" myId ="1" />
   <StatelnClass name = "Sofware Engineering" myId ="2" />

</div>


   </div>*/
   
   <div className = "root">
    < div className = "App" >
  <h2>State ln Class Component</h2>
   <StatelnClass name = "Kwanticha Phanpetch" Counter ="0" />
   <hr/>
   <h2>State ln Class Component</h2>
   <StatelnClass name = "Kwanticha Phanpetch" Counter ="0" />
  </div>


   </div>
   
   
   
   
   
   
   
    );
}

export default App;
