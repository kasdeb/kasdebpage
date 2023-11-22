import { allPosts } from "../../content/allPosts/AllPosts";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Search() {
  const location = useLocation();

  const [searchText, setSearchText] = useState(
    location.hash === "" || location.hash === undefined ? "" : location.hash
  );
  const filteredPosts = allPosts.filter(
    ({ tags, title }) =>
      tags.toLowerCase().includes(searchText.toLowerCase()) || title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="wrapper">
      <div className="profile_headline righteous-font-big-bold">Search</div>
      <div className="card-view-container">
        <input
          className="form-control"
          type="text"
          value={searchText}
          placeholder={"Search..."}
          onChange={({ target }) => setSearchText(target.value)}
        />
        <div className="search-list">
          <table width="100%" cellPadding={8}>
            <tbody>
              <tr className="search-list-header">
                <td width="65%">Title</td>
                <td style={{ textAlign: "right" }} width="35%">
                  Tags
                </td>
              </tr>
            </tbody>
          </table>
          <table width="100%" cellPadding={8}>
            <tbody>
              {filteredPosts.map(({ tags, title, id, url }) => (
                <tr key={id} className="search-list-row">
                  <td width="65%">
                    <Link to={`/post/${url}`}>
                      <strong>{title}</strong>
                    </Link>
                  </td>
                  <td style={{ textAlign: "right" }} width="35%">
                    {tags}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Search;
