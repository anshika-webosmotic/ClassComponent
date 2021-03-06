import React from "react";
class TypeTextarea extends React.Component {
  render() {
    const {
      attribute: { label, attr },
    } = this.props;
    return (
      <div className="form-group px-4 py-2">
        <label>{label}</label>
        <textarea
          placeholder={attr.placeholder}
          name={attr.name}
          className="form-control"
          row="2"
          col="5"
        ></textarea>
      </div>
    );
  }
}

export default TypeTextarea;
