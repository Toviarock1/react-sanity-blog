import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import Error from './pages/Error';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/blog' exact>
          <Blog />
        </Route>
        <Route path='/blog/:slug'>
          <SinglePost  />
        </Route>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
