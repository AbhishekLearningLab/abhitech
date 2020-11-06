import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Posts';
import Posts from './components/Posts';
import Postform from './components/Postform'
import { Container, Row, Col } from 'react-bootstrap';
function App() {
  return (
    <Container>
      <row>
        <h3>Customer Queries</h3>
        <hr/>
        <Postform />
        <Posts />
      </row>
    </Container>
  );
}

export default App;
