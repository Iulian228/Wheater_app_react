import { useState } from 'react';
import './App.css';
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const [position, setPosition] = useState({});
  return (
      <div>
          <LoadingScreen submitPosition={setPosition}/> {/*submitPosition lift up the state from loadingscreen*/}
          <MainPage position={position}/> {/* pass down the state*/}
      </div>
  )
}

export default App;
