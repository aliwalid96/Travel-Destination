
import './App.css';
import Home from './components/home/Home';
import {Routes, Route} from 'react-router-dom';


function App() {

  
return(
    
<>
<Routes>
      <Route path="/" element={<Home  />} />
      
 </Routes>

<Home/>
</>
)
  
}

export default App;
