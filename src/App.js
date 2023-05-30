import logo from './logo.svg';
import './App.css';
import SearchAndLocation from './components/SearchAndLocation';
import TempAndWeather from './components/TempAndWeather';
import NavigationAndDate from './components/NavigationAndDate';


function App() {
  return (
    <div className="App">
      <SearchAndLocation />
      <TempAndWeather />
      <NavigationAndDate />
    </div>
  );
}

export default App;
