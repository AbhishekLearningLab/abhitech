import './styles/App.scss';
import { Layout } from './components/Layout';
import Navbar from './components/elements/Navbar';
import store from './data/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import QueryList from './components/queries/QueryList';
import AddData from './components/queries/AddQuery';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Layout>  
            <div className="py-3">
            <Switch>
                <Route exact path="/sample1" component={QueryList} />
                <Route exact path="/sample1/queries/add" component={AddData} />
              </Switch>
            </div>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
