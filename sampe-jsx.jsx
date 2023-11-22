<div>
  <div>
    <div>
      <div class="form-row">
        <div class="form-group col-md-6">
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
        <div class="form-group col-md-6">
          <label htmlFor="buttonURL">Button URL</label>
          <input
            name="buttonURL"
            className="form-control form-control-sm"
            onChange={(event) => setButtonURL(event.target.value)}
            value={buttonURL}
            type="text"
            id="buttonURL"
            aria-describedby="buttonURL"
            maxLength={120}
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label htmlFor="buttonHeight">Button Height</label>
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
        <div class="form-group col-md-2">
          <label htmlFor="buttonWidth">Button Width</label>
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
        <div class="form-group col-md-2">
          <label htmlFor="buttonBorderRadius">Border radius</label>
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
        <div class="form-group col-md-1">
          <label htmlFor="buttonFont">Font</label>
          <SketchExample setColor={setFontColor} defaultColorFont={fontColor} />
        </div>
        <div class="form-group col-md-1">
          <label htmlFor="buttonBorder">Border</label>
          <SketchExample setColor={setBordercolor} defaultColor={borderColor} />
        </div>
        <div class="form-group col-md-1">
          <label htmlFor="buttonBackground">Background</label>
          <SketchExample setColor={setBgcolor} />
        </div>
        {/* <div class="form-group col-md-3"></div> */}
      </div>
      <div class="form-row"></div>
    </div>
    <div className="post-text-flex-right">
      <div className="form-group">
        <fieldset class="button-demo">
          <div id="preview">
            <div className="button-demo">
              <a
                href={buttonURL}
                style={{
                  backgroundColor: `rgba(${bgcolor.r}, ${bgcolor.g}, ${bgcolor.b}, ${bgcolor.a})`,
                  border: `1px solid rgba(${borderColor.r}, ${borderColor.g}, ${borderColor.b}, ${borderColor.a})`,
                  borderRadius: Number(buttonBorderRadius),
                  color: `rgba(${fontColor.r}, ${fontColor.g}, ${fontColor.b}, ${fontColor.a})`,
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
        </fieldset>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-12">
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
          rows={10}
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
</div>;
