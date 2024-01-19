import { allPosts } from "../../content/allPosts/AllPosts";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Search.css";

function Search() {
  const location = useLocation();

  const [searchText, setSearchText] = useState(
    location.hash === "" ||
      location.hash === undefined
      ? ""
      : location.hash
  );

  const filter = searchText.toLowerCase();
  const filteredResult = allPosts.filter(
    (item) => {
      return (
        item.tags.indexOf(filter) >= 0 ||
        item.title
          .toLowerCase()
          .indexOf(filter) >= 0
      );
    }
  );

  return (
    <>
      <div className="profile-headline righteous-font-big-bold">
        Search
      </div>
      <div className="inside-post-wrapper">
        <input
          className="form-control"
          type="text"
          value={searchText}
          placeholder={"Search..."}
          onChange={({ target }) =>
            setSearchText(target.value)
          }
        />
        <table className="search-table">
          <tbody>
            <tr className="search-list-header">
              <td className="left">Title</td>
              <td className="right">Tags</td>
            </tr>
          </tbody>
        </table>
        <table className="search-table">
          <tbody>
            {filteredResult.map(
              ({ tags, title, id, url }) => (
                <tr
                  key={id}
                  className="search-list-row"
                >
                  <td className="left">
                    <Link
                      className="link"
                      to={`/post/${url}`}
                    >
                      <strong>{title}</strong>
                    </Link>
                  </td>
                  <td className="right">
                    {tags.join(" ")}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Search;
