import React from "react";
class TypeRadio extends React.Component {
  render() {
    let {
      attribute: { type, label, options },
      dataChange,
      valueToInput,
      checked,
    } = this.props;
    return (
      <div className="form-group p-4">
        <label>{label}</label>
        {options.map((opt, index) => (
          <div key={index.toString()} className="d-flex form-check">
            <input
              id={index}
              onChange={dataChange}
              checked={checked || Object.values(valueToInput)[index]}
              type={type}
              className="form-check-input my-2"
              name={opt.name}
              value={opt.value}
            />
            <label className="mx-2">{opt.value}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default TypeRadio;
