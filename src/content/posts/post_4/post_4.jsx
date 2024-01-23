import bgc from "../post_4/bgc4.png";
import ButtonGenerator from "./ButtonGenerator.jsx";

let post_4 = {
  id: 4,
  new: true,
  postedDate: "08-30-2022",
  updatedDate: "08-30-2022",
  postedBy: "Kasper Debicki",
  title: "Email button generator", // title with spaces
  url: "bulletproof-email-button-generator", // should be the same as title but instead of spaces use dashes
  tags: ["#button", "#generator"],
  backgroundImage: bgc, // tile image
  post: (
    <>
      <div className="post-text">
        <ButtonGenerator />
      </div>
    </>
  )
};

export default post_4;
