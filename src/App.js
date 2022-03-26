import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading/Heading';
import Car from './components/Cars/Car';
import QA from './components/QA/QA';
import { useState } from 'react';

function App() {

  const [random, setRandom] = useState([Math.floor(Math.random() * 0) - 1])
  console.log(random)

  const handleRandomNumber = (num) => {
    const newRandom = [num]
    setRandom(newRandom)
  }
  return (
    <div className="App">
      <Heading></Heading>
      <Car></Car>
      <div>
        {
          random.map(num => <Car data={num} handleRandomNumber={handleRandomNumber[0]} > <h1>(num)</h1> </Car>)
        }
      </div>
      <QA></QA>
    </div>
  );
}

export default App;
