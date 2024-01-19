import { allPosts } from "../../content/allPosts/AllPosts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./InsidePostView.css";

function InsidePostView() {
  const idFromUrl = useParams();

  let viewedItem = allPosts.filter(function (x) {
    return x.url === idFromUrl.id;
  })[0];

  if (viewedItem) {
    return (
      <>
        <div className="profile-headline righteous-font-big-bold">
          {viewedItem.title}
        </div>
        <div className="inside-post-wrapper">
          <div className="card-info">
            Posted by {viewedItem.postedBy} on{" "}
            {viewedItem.postedDate} <br />
            Last updated on{" "}
            {viewedItem.updatedDate}
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
  } else {
    return <ErrorPage />;
  }
}

export default InsidePostView;
