import * as React from "react";



import { Routes, Route} from "react-router-dom";
import {Home} from './Component/Home';
import {Navbar} from './Component/Navbar';


import { About } from "./Component/About";

import { Contact } from "./Component/Contact";
import Blog from "./Component/Blog";
import Footer from "./Component/Footer";
import Service from "./Component/Service";
import Error from "./Component/Error";
import {Web} from "./Component/Web";
import Cloud from "./Component/Cloud";
import Networking from './Component/Networking';
import Cyber from './Component/Cyber';
import { Work } from "./Component/Work";
function App() {

 
return (
  
 
  <div className="App">
     
      <Navbar/>
<Routes>        
<Route path="/"  element={<Home />} />
         <Route path="/About" element={<About />} />
     
         <Route path="/Blog" element={<Blog />} />
   
         <Route path="/Work" element={<Work />} /> 
        <Route path="/contact" element={<Contact />} /> 
  
      
  <Route path="Service" element={<Service/>}>
  <Route path="Web"  element={<Web />} />
        <Route path="Cyber" element={<Cyber />} />
        <Route path="Cloud" element={<Cloud />} />
        <Route path="Networking" element={<Networking />} />
</Route>



        <Route path="*" element={<Error />} /> 
    
</Routes>
    
<Footer/>


    </div>
          
    
    
  );
}
export default App;


