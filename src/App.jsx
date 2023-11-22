import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About";
import RecentPost from "./components/RecentPost/RecentPost";
import Search from "./components/Search/Search";
import PostView from "./components/PostView/PostView";
import Posts from "./components/Posts/Posts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="App" className="App">
      {/* <Nav /> */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/recent-post">
          <RecentPost />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/search/:id" component={Search} />
        <Route path="/post/:id" render={(props) => <PostView {...props} />} />
        <Route exact path="/">
          <div className="websites_wrapper">
            <Posts />
          </div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
