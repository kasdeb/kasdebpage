import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

export class SketchExample extends React.Component {
  state = {
    displayColorPicker: false,
    color: "#6730E3",
    colorBG: "#6730E3",
    colorFT: "#ffffff",
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.hex }, () => {
      this.props.setColor(this.state.color);
    });
    this.setState({ colorBG: color.hex }, () => {
      this.props.setColor(this.state.color);
    });
    this.setState({ colorFT: color.hex }, () => {
      this.props.setColor(this.state.color);
    });
    console.log(this.state);
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "50px",
          height: "18px",
          borderRadius: "2px",
          background: `${this.state.color}`,
        },
        colorBG: {
          width: "50px",
          height: "18px",
          borderRadius: "2px",
          background: `${this.state.colorBG}`,
        },
        colorFT: {
          width: "50px",
          height: "18px",
          borderRadius: "2px",
          background: `${this.state.colorFT}`,
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div
            style={
              this.props.hasOwnProperty("defaultColor")
                ? styles.colorBG
                : this.props.hasOwnProperty("defaultColorFont")
                ? styles.colorFT
                : styles.color
            }
          />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker color={this.state.color} onChange={this.handleChange} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default SketchExample;
