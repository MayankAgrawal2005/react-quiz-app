import logo from './logo.svg';
import './App.css';

import  HomePage  from './components/HomePage';
import {Routes,Route} from 'react-router-dom';
import Quiz from './pages/Quiz';
function App() {
  return (
    <div className=" ">
    
     <Routes>
     <Route path="/" element={ <HomePage/>} />
      <Route path="/quiz" element={<Quiz />} />
      
     </Routes>

      
    </div>
  );
}

export default App;
