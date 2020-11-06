import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Posts';
import Posts from './components/Posts';
import Postform from './components/Postform'
function App() {
  return (
    <div className="App">
      <Postform/>
      <hr/>
      <Posts />
    </div>
  );
}

export default App;
