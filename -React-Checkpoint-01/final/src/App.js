import './App.css';
//importet fichier js
import Name from './name';
import Picture from './picture';
import Price from './price';
import Description from './Description';
//importer card react bootstrap
import { Card } from 'react-bootstrap';

function App() {
  return (

      <header className="App-header">
        <div className="App">
          <Card className='Card'>
        <Picture/>
        <Card.Body>
        <Card.Title> <Name/></Card.Title>
        <Card.Text>
        <Price/>
        <Description/>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </header>
  );
}
export default App;
