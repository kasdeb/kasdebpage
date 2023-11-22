import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import bgc from "../post_1/bgc1.png";

/* 
<SyntaxHighlighter wrapLines={true} language="velocity" style={materialOceanic}>
{``}
</SyntaxHighlighter>
*/

let post_1 = {
  id: 1,
  new: false,
  postedDate: "08-30-2022",
  updatedDate: "08-30-2022",
  postedBy: "Kasper Debicki",
  title: "Outlook Email Rendering Issues", // title with spaces
  url: "outlook-email-rendering-issues", // should be the same as title but instead of spaces use dashes
  tags: "#html #outlook #rendering",
  backgroundImage: bgc, // tile image
  post: (
    <div>
      <div className="post-text">
        Outlook doesn't support CSS styles &mdash; it will display your image at its actual size unless you include the
        width and height attributes on images
      </div>
      <SyntaxHighlighter wrapLines={true} language="html" style={materialOceanic}>
        {`<!--correct-->
<img width="142" height="175" src="#" alt="#" />

<!--incorrect--> 
<img style="width: 142px; height: 175px;" src="#" alt="#" />`}
      </SyntaxHighlighter>
      <div className="post-text">Remove blue or black border around images that are linked</div>
    </div>
  ),
};

export default post_1;
