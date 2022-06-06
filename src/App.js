import './App.css';
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import {Toolbar} from "./components/toolbar/Toolbar";

function App() {
  return (
      <div>
          <LoadingScreen/>
          <MainPage/>
          <Toolbar></Toolbar>

      </div>
  )
}

export default App;
