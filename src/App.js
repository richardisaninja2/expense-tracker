import logo from './logo.svg';
import './App.css';
import Subscriptions from './Components/Subscriptions/Subscriptions';
import General from './Components/General/General';

function App() {
  return (
    <div className="App">
      Payment history
      <General/>
      {/* <Subscriptions/> */}
    </div>
  );
}

export default App;
