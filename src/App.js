import { useState } from 'react';
import './App.css';
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const [weatherData, setData] = useState([])//using this hook app js is able to get the state from LoadingScreen component
  return (
      <div>
          <LoadingScreen submitData={setData}/>
          <MainPage weatherData={weatherData}/>d
      </div>
  )
}

export default App;
