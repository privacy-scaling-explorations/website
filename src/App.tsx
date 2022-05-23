import Starter from './Starter';
import Projects from './Projects';
import './App.css';

function App() {

  return (
    <div className="App container-sm">
      {Starter()}
      {Projects()}
    </div>
  );
}

export default App;
