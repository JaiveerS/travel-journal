import Nav from './components/Nav';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
  const dataElements = data.map(card => 
            <Card card={card}/>
    )
  return (
    <div className="App">
      <Nav />
      {dataElements}
    </div>
  );
}

export default App;
