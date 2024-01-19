import { allPosts } from "../../content/allPosts/AllPosts";
import { Link } from "react-router-dom";
import "./RecentPost.css";

function RecentPost() {
  let viewedItem = allPosts.filter(function (x) {
    return x.new === true;
  })[0];

  return (
    <>
      <div className="profile-headline righteous-font-big-bold">
        {viewedItem.title}
      </div>
      <div className="inside-post-wrapper">
        <div className="card-info">
          Posted by {viewedItem.postedBy} on{" "}
          {viewedItem.postedDate} <br />
          Last updated on {viewedItem.updatedDate}
          <br />
          {viewedItem.tags.map((tag, id) => (
            <Link
              key={id}
              to={`/search/${tag}`}
              style={{ fontSize: 16 }}
            >
              {tag}{" "}
            </Link>
          ))}
        </div>
        {viewedItem.post}
      </div>
    </>
  );
}

export default RecentPost;
