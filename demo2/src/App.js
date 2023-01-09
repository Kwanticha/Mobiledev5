import logo from './logo.svg';
import './App.css';
import Post from "./Post"
import Comment from "./Comment"
import Card from "./Card"
import Navbar from "./Navbar"

function App() {
  return (
   <div>
     <Navbar></Navbar>
     <br></br>
     <Post userId="Dek_SE" message ="Yeah, I got a grade A in Mobile Programming.">
        
        <Comment userId ="Kwanticha" message ="wow,it's wonderful"></Comment>

        <Comment userId = "Kwanticha" message ="Congratulation ! !"></Comment>
        
     </Post>
     <br></br>
     <Card> </Card>
     
   
   </div>
  );
}

export default App;
