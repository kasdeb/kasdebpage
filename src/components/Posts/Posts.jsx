import { allPosts } from "../../content/allPosts/AllPosts";
import { Fragment } from "react";
import Radium, { StyleRoot } from "radium";
import { zoomOut, zoomIn } from "react-animations";
import { Link } from "react-router-dom";
import { ReactComponent as RibbonNew } from "../../content/img/svg/ribbon_new.svg";

function Posts() {
  const styles = {
    zoomOut: {
      animation: ".2s linear 1 forwards",
      animationName: Radium.keyframes(zoomIn, "zoomIn"),
      backgroundColor: "transparent",
      ":hover": {
        animation: ".2s linear 1 forwards",
        animationName: Radium.keyframes(zoomOut, "zoomOut"),
        backgroundColor: "transparent",
      },
    },
  };

  return (
    <Fragment>
      {allPosts.map((x, index) => {
        return (
          <StyleRoot key={index}>
            <Link
              to={{
                pathname: `post/${x.url}`,
              }}
            >
              <div
                key={index}
                className="card"
                style={{
                  border: "1px solid black",
                  backgroundImage: `url(${x.backgroundImage})`,
                  borderRadius: "7px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="hex-wrapper">
                  <div className="title_wrapper" style={styles.zoomOut}>
                    <div style={{ paddingRight: 10, paddingLeft: 10 }}>
                      <h2>{x.title}</h2>
                    </div>
                  </div>
                </div>
                {x.new ? (
                  <span className="ribbon-new">
                    <RibbonNew />
                  </span>
                ) : null}
              </div>
            </Link>
          </StyleRoot>
        );
      })}
    </Fragment>
  );
}

export default Posts;
