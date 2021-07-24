import React from "react";
class TypeRadio extends React.Component {
  render() {
    const {
      attribute: { type, label, options },
    } = this.props;
    return (
      <div className="form-group p-4">
        <label>{label}</label>
        {options.map((opt, index) => (
          <div key={index.toString()} className="d-flex form-check">
            <input
              type={type}
              className="form-check-input form-control my-2"
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
