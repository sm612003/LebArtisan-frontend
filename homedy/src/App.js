import axios from 'axios';
import './App.css';
import Router from './Routes/Route';

axios.defaults.withCredentials = true
function App() {
  return (
    <div className="App">
        <Router />

    </div>
  );
}

export default App;
