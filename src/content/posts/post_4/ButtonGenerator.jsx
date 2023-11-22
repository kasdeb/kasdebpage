import React, { useState } from "react";
import { SketchExample } from "./colorpicker.jsx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export default function ButtonGenerator() {
  const copyHandler = () => {
    navigator.clipboard.writeText(finalButtonCode);
  };

  const [bgcolor, setBgcolor] = useState("#6730E3");
  const [borderColor, setBordercolor] = useState("#6730E3");
  const [fontColor, setFontColor] = useState("#ffffff");
  const [buttonText, setButtonText] = useState("REGISTER");
  const [buttonURL, setButtonURL] = useState("");
  const [buttonHeight, setButtonHeight] = useState(37);
  const [buttonWidth, setButtonWidth] = useState(240);
  const [buttonBorderRadius, setButtonBorderRadius] = useState(0);
  const [addButtonBorder, setAddButtonBorder] = useState(false);
  const [addBorderRadius, setAddBorderRadius] = useState(false);

  const onChangeHandler = () => {
    setAddButtonBorder(!addButtonBorder);
  };

  const onChangeHandlerBorderRadius = () => {
    setAddBorderRadius(!addBorderRadius);
  };

  let radius_type = "";
  addBorderRadius === true ? (radius_type = "roundrect") : (radius_type = "rect");

  const arcsize = Math.round(2.5 * buttonBorderRadius);

  const finalButtonCode = `<div>
  <!--[if mso]>
    <v:${radius_type}
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      href="${buttonURL}"
      style="height:${buttonHeight}px; v-text-anchor: middle; width:${buttonWidth}px;"
      arcsize="${arcsize}%"
      strokecolor="${borderColor}"
      fillcolor="${bgcolor}">
      <w:anchorlock />
      <center style="color:${fontColor}; font-family: sans-serif; font-size: 13px; font-weight: bold">
        ${buttonText}
      </center>
    </v:${radius_type}> <!
  [endif]--><a
    href="${buttonURL}"
    style="
      background-color: ${bgcolor}; 
      border: 1px solid ${borderColor}; 
      border-radius: ${buttonBorderRadius}px; 
      color: ${fontColor}; 
      display: inline-block;
      font-family: sans-serif;
      font-size: 13px;
      font-weight: bold;
      line-height:${buttonHeight}px;
      text-align: center;
      text-decoration: none;
      width:${buttonWidth}px;
      -webkit-text-size-adjust: none;
      mso-hide: all;
    ">${buttonText}</a>
</div>`;

  return (
    <div>
      <div className="form-group">
        <label htmlFor="buttonText">Button Text</label>
        <input
          name="buttonText"
          className="form-control form-control-sm"
          onChange={(event) => setButtonText(event.target.value)}
          value={buttonText}
          type="text"
          id="buttonText"
          aria-describedby="buttonText"
          maxLength={120}
        />
      </div>
      <div className="form-group">
        <label htmlFor="buttonURL">Button URL</label>
        <input
          name="buttonURL"
          className="form-control form-control-sm"
          onChange={(event) => setButtonURL(event.target.value)}
          value={buttonURL}
          type="text"
          id="buttonURL"
          aria-describedby="buttonURL"
          placeholder="http://"
        />
      </div>
      <div className="form-group">
        <label htmlFor="buttonHeight">Button Height (px)</label>
        <input
          name="buttonHeight"
          className="form-control form-control-sm"
          onChange={(event) => setButtonHeight(event.target.value)}
          value={buttonHeight}
          type="number"
          id="buttonHeight"
          aria-describedby="buttonHeight"
        />
      </div>
      <div className="form-group">
        <label htmlFor="buttonWidth">Button Width (px)</label>
        <input
          name="buttonWidth"
          className="form-control form-control-sm"
          onChange={(event) => setButtonWidth(event.target.value)}
          value={buttonWidth}
          type="number"
          id="buttonWidth"
          aria-describedby="buttonWidth"
        />
      </div>

      <div className="form-group">
        <div className="picker-box">
          <label htmlFor="buttonFont">Font</label>
          <SketchExample setColor={setFontColor} defaultColorFont={fontColor} />
        </div>
        <div className="picker-box">
          <label htmlFor="buttonBackground">Background</label>
          <SketchExample setColor={setBgcolor} />
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            id="borderColor"
            className="form-check-input"
            type="checkbox"
            name="addButtonBorder"
            checked={addButtonBorder}
            onChange={onChangeHandler}
          />
          <label htmlFor="borderColor">Border color</label>
        </div>
        {addButtonBorder ? (
          <div className="form-group">
            <SketchExample setColor={setBordercolor} defaultColor={borderColor} />{" "}
          </div>
        ) : null}
        <div className="form-check">
          <input
            id="buttonBorderRadius"
            className="form-check-input"
            type="checkbox"
            name="addBorderRadius"
            checked={addBorderRadius}
            onChange={onChangeHandlerBorderRadius}
          />
          <label htmlFor="buttonBorderRadius">Border radius (px)</label>
        </div>
        {addBorderRadius ? (
          <div className="form-group">
            <input
              name="buttonBorderRadius"
              className="form-control form-control-sm"
              onChange={(event) => setButtonBorderRadius(event.target.value)}
              value={buttonBorderRadius}
              type="number"
              id="buttonBorderRadius"
              aria-describedby="buttonBorderRadius"
            />
          </div>
        ) : null}
      </div>
      <div className="form-group">
        <div id="preview">
          <a
            href={buttonURL}
            style={{
              backgroundColor: `${bgcolor}`,
              border: `1px solid ${borderColor}`,
              borderRadius: Number(buttonBorderRadius),
              color: `${fontColor}`,
              display: "inline-block",
              fontFamily: "sans-serif",
              fontSize: 15,
              lineHeight: `${Number(buttonHeight)}px`,
              fontWeight: "bold",
              textAlign: "center",
              textDecoration: "none",
              width: Number(buttonWidth),
            }}
          >
            {buttonText}
          </a>
        </div>
      </div>
      <div className="form-group col-md-12 px-0">
        <label htmlFor="Final Code">Final Code</label>
        <div className="text-area-button-box">
          <textarea
            name="Final Code"
            value={finalButtonCode}
            type="text"
            className="form-control form-control-sm"
            id="Final Code"
            aria-describedby="Final Code"
            disabled={true}
            rows={7}
          />
          <div className="copy-box">
            <Tippy
              content="Copied!"
              placement={"top"}
              trigger={"click"}
              onShow={(instance) => {
                setTimeout(() => {
                  instance.hide();
                }, 800);
              }}
              appendTo={() => document.querySelector("#final-code-copy-btn")}
            >
              <button id="final-code-copy-btn" className="my-btn btn-cancel" onClick={copyHandler}>
                <span>Copy</span>
              </button>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}
