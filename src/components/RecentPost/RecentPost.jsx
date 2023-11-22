import { allPosts } from "../../content/allPosts/AllPosts";
import { Link } from "react-router-dom";

function RecentPost() {
  let viewedItem = allPosts.filter(function (x) {
    return x.new === true;
  })[0];
  
  let tags = viewedItem.tags;
  let tag = tags.split(" ");

  return (
    <div className="wrapper">
      <div className="profile_headline righteous-font-big-bold">{viewedItem.title}</div>
      <div className="card_info">
        Posted by {viewedItem.postedBy} on {viewedItem.postedDate}
        <br />
        {tag.map((tag, id) => (
          <Link key={id} to={`/search/${tag}`}>
            {tag}{" "}
          </Link>
        ))}
      </div>
      <div className="card-view-container">
        <div className="card-view-left">{viewedItem.post}</div>
      </div>
    </div>
  );
}

export default RecentPost;
