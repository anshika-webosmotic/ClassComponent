import React from "react";
class TypeButton extends React.Component {
  render() {
    const {
      attribute: { type, attr },
    } = this.props;
    return (
      <div className="form-group px-4 py-2">
        <input
          type={type}
          placeholder={attr.placeholder}
          className="form-control btn-primary"
          name={attr.value}
          value={attr.value}
        />
      </div>
    );
  }
}

export default TypeButton;
