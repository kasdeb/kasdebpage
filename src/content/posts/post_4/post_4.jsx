import bgc from "../post_1/bgc1.png";
import ButtonGenerator from "./ButtonGenerator.jsx";



let post_4 = {
  id: 1,
  new: false,
  postedDate: "08-30-2022",
  updatedDate: "08-30-2022",
  postedBy: "Kasper Debicki",
  title: "Email button generator", // title with spaces
  url: "bulletproof-email-button-generator", // should be the same as title but instead of spaces use dashes
  tags: "#button #generator",
  backgroundImage: bgc, // tile image
  post: (
    <div>
      <div className="post-text">
        <ButtonGenerator />
      </div>
    </div>
  ),
};

export default post_4;
