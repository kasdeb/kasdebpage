import { allPosts } from "../../content/allPosts/AllPosts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PostView() {
  const idFromUrl = useParams();

  let viewedItem = allPosts.filter(function (x) {
    return x.url === idFromUrl.id;
  })[0];

  let tags = viewedItem.tags;
  let tag = tags.split(" ");

  return (
    <div className="wrapper">
      <div className="profile_headline righteous-font-big-bold">{viewedItem.title}</div>
      <div className="card_info">
        Posted by {viewedItem.postedBy} on {viewedItem.postedDate} <br />
        Last updated on {viewedItem.updatedDate}
        <br />
        {tag.map((tag, id) => (
          <Link key={id} to={`/search/${tag}`} style={{fontSize: 16}}>
            {tag}{" "}
          </Link>
        ))}
      </div>
      {viewedItem.post}
    </div>
  );
}

export default PostView;
