import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About";
import RecentPost from "./components/RecentPost/RecentPost";
import Search from "./components/Search/Search";
import InsidePostView from "./components/InsidePostView/InsidePostView";
import DisplayAllPosts from "./components/DisplayAllPosts/DisplayAllPosts";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

function App() {
  return (
    <div id="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<DisplayAllPosts />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/recent-post"
          element={<RecentPost />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
        <Route
          path="/post/:id"
          element={<InsidePostView />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
