import React from "react";
class TypeNull extends React.Component {
  render() {
    const {
      attribute: { type, label },
      valueToInput,
    } = this.props;
    return (
      <div className="form-group px-4 py-2">
        <label>{label}</label>
        <input type={type} className="form-control" value={valueToInput} readOnly={true}/>
      </div>
    );
  }
}

export default TypeNull;
