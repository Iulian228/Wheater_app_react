import './App.css';
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import MainPage from "./components/MainPage/MainPage";
import { useState } from 'react';
function App() {
  const [position, setPosition] = useState({})
  
  return (
      <div>
          <LoadingScreen onSuccess={setPosition}/>
          <MainPage position={position}/>
      </div>
  )
}

export default App;
