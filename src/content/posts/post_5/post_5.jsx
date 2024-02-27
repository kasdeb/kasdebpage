import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import bgc from "../post_5/bgc2.jpg";

let post_5 = {
  id: 2,
  new: false,
  postedDate: "02-27-2024",
  updatedDate: "02-27-2024",
  postedBy: "Kasper Debicki",
  title: "Marketo Custom Object + Velocity", // title with spaces
  url: "marketo-custom-object-+-velocity", // should be the same as title but instead of spaces use dashes
  tags: ["#velocity", "#marketo"],
  backgroundImage: bgc, // tile image
  post: (
    <>
      <div className="post-text">
        <b>Marketo Custom Object + Velocity</b>
        <br />
        At times, you may want to send emails even
        to those who don't have a custom object on
        their record. This snippet allows you to
        apply logic to anyone, whether they have
        or haven't a custom object available.
        <SyntaxHighlighter
          wrapLines={true}
          language="velocity"
          style={materialOceanic}
        >
          {`#if (\${customObjectData_cList.get(0).name} && !\${customObjectData_cList.get(0).name.isEmpty()})
##custom object available
#else
##custom object NOT available
#end`}
        </SyntaxHighlighter>
      </div>
    </>
  )
};
export default post_5;
