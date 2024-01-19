import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import bgc from "../post_3/bgc3.png";

let post_3 = {
  id: 3,
  new: false,
  postedDate: "08-18-2022",
  updatedDate: "10-08-2022",
  postedBy: "Kasper Debicki",
  title: "Email Template", // title with spaces
  url: "email-template", // should be the same as title but instead of spaces use dashes
  tags: ["#template"],
  backgroundImage: bgc, // tile image
  post: (
    <>
      <div className="post-text">
        <h3>Basic email template</h3>

        <SyntaxHighlighter
          wrapLines={true}
          language="velocity"
          style={materialOceanic}
        >
          {`<!DOCTYPE html>
<html lang="en" dir="ltr" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
<meta name="x-apple-disable-message-reformatting">
<!--light/dark mode-->
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>Email title</title>
<!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
<![endif]-->
<style>
/* light/dark mode styles */
:root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
}
</style>
</head>
<body class="body">
<div role="article" aria-roledescription="email" aria-label="email name" lang="en" dir="ltr" style="font-size:medium; font-size:max(16px, 1rem)">
  <table>
    <tr>
      <td style="display:none !important;
           visibility:hidden;
           mso-hide:all;
           font-size:1px;
           color:#ffffff;
           line-height:1px;
           max-height:0px;
           max-width:0px;
           opacity:0;
           overflow:hidden;">Preheader text here</td>
    </tr>
  </table>
  <!-- content here -->
</div>
</body>
</html>
`}
        </SyntaxHighlighter>
      </div>
    </>
  )
};
export default post_3;
