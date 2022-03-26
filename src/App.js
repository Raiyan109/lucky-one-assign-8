import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading/Heading';
import Car from './components/Cars/Car';
import QA from './components/QA/QA';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Car></Car>
      <QA></QA>
    </div>
  );
}

export default App;
