import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './Notfound';

function App() {
  // const title = "Welcome to the Blog"

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">   {/* <Path depend on route */}
              <Home />
            </Route>
            <Route path="/create">   {/* <Path depend on route */}
              <Create />
            </Route>
            <Route path="/blogs/:id">   {/* <Path depend on route */}
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
