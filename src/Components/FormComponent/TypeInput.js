import React from "react";
class TypeInput extends React.Component {
  render() {
    const {
      attribute: { type, label, attr },
    } = this.props;
    return (
      <div className="form-group px-4 py-2">
        <label>{label}</label>
        <input
          type={type}
          name={attr.name}
          placeholder={attr.placeholder}
          className="form-control"
        />
      </div>
    );
  }
}

export default TypeInput;
