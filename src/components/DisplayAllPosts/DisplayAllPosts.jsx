import { allPosts } from "../../content/allPosts/AllPosts";
import Radium, { StyleRoot } from "radium";
import {
  zoomOut,
  zoomIn
} from "react-animations";
import { Link } from "react-router-dom";
import { ReactComponent as RibbonNew } from "../../content/img/svg/ribbon_new.svg";
import "./DisplayAllPosts.css";

function DisplayAllPosts() {
  const styles = {
    zoomOut: {
      animation: ".2s linear 1 forwards",
      animationName: Radium.keyframes(
        zoomIn,
        "zoomIn"
      ),
      backgroundColor: "transparent",
      ":hover": {
        animation: ".2s linear 1 forwards",
        animationName: Radium.keyframes(
          zoomOut,
          "zoomOut"
        ),
        backgroundColor: "transparent"
      }
    }
  };

  return (
    <div className="content-wrapper">
      <>
        {allPosts.map((x, index) => {
          return (
            <StyleRoot key={index}>
              <Link
                to={{
                  pathname: `post/${x.url}`
                }}
              >
                <div
                  key={index}
                  className="card"
                  style={{
                    backgroundImage: `url(${x.backgroundImage})`
                  }}
                >
                  <div className="hex-wrapper">
                    <div
                      className="title-wrapper"
                      style={styles.zoomOut}
                    >
                      <div
                        style={{
                          paddingRight: 10,
                          paddingLeft: 10
                        }}
                      >
                        <span>{x.title}</span>
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
      </>
    </div>
  );
}

export default DisplayAllPosts;
