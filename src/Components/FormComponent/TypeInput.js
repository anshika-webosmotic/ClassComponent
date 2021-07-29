import React from "react";
class TypeInput extends React.Component {
  render() {
    const {
      attribute: { type, label, attr }, dataChange, valueToInput
    } = this.props;
    console.log(valueToInput)
    return (
      <div className="form-group px-4 py-2">
        <label>{label}</label>
        <input
          type={type}
          name={attr.name}
          placeholder={attr.placeholder}
          onChange={dataChange}
          className="form-control"
          value={valueToInput}
        />
      </div>
    );
  }
}

export default TypeInput;
