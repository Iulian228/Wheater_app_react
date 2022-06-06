import './App.css';
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
      <div>
          <LoadingScreen/>
          <MainPage/>
      </div>
  )
}

export default App;
