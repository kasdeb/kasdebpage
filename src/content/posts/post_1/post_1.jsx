import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import bgc from "../post_1/bgc1.png";

let post_1 = {
  id: 1,
  new: false,
  postedDate: "08-30-2022",
  updatedDate: "09-25-2022",
  postedBy: "Kasper Debicki",
  title: "Images In Emails", // title with spaces
  url: "images-in-emails", // should be the same as title but instead of spaces use dashes
  tags: ["#images", "#retina", "#responsive"],
  backgroundImage: bgc, // tile image
  post: (
    <>
      <div className="post-text">
        <h3>Table of Contents</h3>
        <ul>
          <li>
            <a href="#image-file-format">
              Image file format
            </a>
          </li>
          <li>
            <a href="#image-size">Image size</a>
          </li>
          <li>
            <a href="#alt-text">ALT text</a>
          </li>
          <li>
            <a href="#image-as-link">
              Image as link
            </a>
          </li>
          <li>
            <a href="#retina-image">
              Retina image
            </a>
          </li>
          <li>
            <a href="#responsive-image-boilerplate">
              Responsive image boilerplate
            </a>
          </li>
        </ul>
        <h3 id="image-file-format">
          Image file format
        </h3>
        The most popular image formats for email
        are JPG, PNG, GIF, and SVG. The best use
        case for all the four file formats are:
        <br />
        <br />
        <ul>
          <li>
            JPG: for stock photographs, images
            that don’t require transparency
          </li>
          <li>
            PNG: for transparency images, text
            images and logos
          </li>
          <li>GIF: for animated effects</li>
          <li>
            SVG: for high-quality images at low
            file sizes
          </li>
        </ul>
        <h3 id="image-size">Image size</h3>
        Image should be twice the size of the
        space you would like to insert the image,
        so it looks great on all monitors and
        there is no pixelation or blurriness. It
        is worth mentioning that Outlook does not
        support CSS styles — it will display your
        image at its actual size unless you
        include the width and height attributes on
        images.
        <SyntaxHighlighter
          wrapLines={true}
          language="html"
          style={materialOceanic}
        >
          {`<!-- correct -->
<img width="142" height="175" src="#" alt="#" />

<!-- incorrect for Outlook -->
<img style="width: 142px; height: 175px" src="#" alt="#" />
`}
        </SyntaxHighlighter>
        <h3 id="alt-text">ALT text</h3>
        When images are blocked, most email
        clients will display the alternative (ALT)
        text providing some contextual information
        about images.
        <SyntaxHighlighter
          wrapLines={true}
          language="html"
          style={materialOceanic}
        >
          {`<img width="142" height="175" src="#" alt="Teacher pointing to a student's computer screen" />
`}
        </SyntaxHighlighter>
        <h3 id="image-as-link">Image as link</h3>
        When you wrap img tag with a link, some
        email clients will automatically add a
        blue border around the image. To prevent
        blue borders, add the border attribute to
        img tag and make the value zero.
        <SyntaxHighlighter
          wrapLines={true}
          language="html"
          style={materialOceanic}
        >
          {`<a href="#"><img border="0" width="142" height="175" src="#" alt="#" /></a>
`}
        </SyntaxHighlighter>
        And if you want to add border to an image,
        wrap a and img tags with the table/tr/td
        and add styles to td tag.
        <SyntaxHighlighter
          wrapLines={true}
          language="html"
          style={materialOceanic}
        >
          {`<table border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td style="border: 1px solid #797979">
        <a href="#"><img border="0" width="142" height="175" src="#" alt="#" /></a>
      </td>
    </tr>
  </tbody>
</table>
`}
        </SyntaxHighlighter>
        <h3 id="retina-image">Retina image</h3>
        For the image to look good on high-DPI
        displays, it needs to be twice as large.
        When it is scaled down in the email, there
        are more pixels for retina screens to
        display. The major drawback of using
        Retina images in an email is that it
        increases file size. The code below works
        across all email clients.
        <SyntaxHighlighter
          wrapLines={true}
          language="html"
          style={materialOceanic}
        >
          {`<img
  border="0"
  width="142"
  src="#"
  alt="#"
  style="
    width: 100%;
    max-width: 142;
    font-family: sans-serif;
    color: #ffffff;
    font-size: 20px;
    display: block;
    border: 0px;
  "
/>
`}
        </SyntaxHighlighter>
        <h3 id="responsive-image-boilerplate">
          Responsive image boilerplate
        </h3>
        The code below will fix various common
        display issues. Make sure that the
        containing td is stripped of font-size &
        line-height as inline style, as this will
        affect how your image is rendered.
        <SyntaxHighlighter
          wrapLines={true}
          language="css"
          style={materialOceanic}
        >
          {`@media screen and (max-width: 640px) {
  .responsive-image {
    width: 100% !important;
    height: auto !important;
  }
}
`}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          wrapLines={true}
          language="html"
          style={materialOceanic}
        >
          {`<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center">
      <img
        alt="#"
        src="#"
        width="284"
        height="auto"
        style="display: block; width: 100%; max-width: 284; border-style: none"
        border="0"
        class="responsive-image"
      />
    </td>
  </tr>
</table>`}
        </SyntaxHighlighter>
      </div>
    </>
  )
};

export default post_1;
