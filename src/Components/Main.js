import React from "react";
import FormArray from "./FormArray";
import TypeCheckbox from "./FormComponent/TypeCheckbox";
import TypeInput from "./FormComponent/TypeInput";
import TypeRadio from "./FormComponent/TypeRadio";
import TypeTextarea from "./FormComponent/TypeTextarea";
import TypeButton from "./FormComponent/TypeButton";
import TypeNull from "./FormComponent/TypeNull";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      name: '',
      email: '',
      phone: ''
    }
    };
  render() {
    const allowedType = ["text", "tel", "password", "email"];
    const allowedBtn = ["button", "submit", "reset"];
    return (
      <div>
        <form className="form-group p-3 bg-light shadow rounded">
          <h2 className="px-4">REGISTRATION</h2>
          {FormArray.map((element, index) => {
            console.log(element.type);
            if (allowedType.includes(element.type)) {
              return <TypeInput key={index.toString()} attribute={element} />;
            } else if (element.type === "null") {
              return <TypeNull key={index.toString()} attribute={element} />;
            } else if (element.type === "textarea") {
              return (
                <TypeTextarea key={index.toString()} attribute={element} />
              );
            } else if (element.type === "radio") {
              return <TypeRadio key={index.toString()} attribute={element} />;
            } else if (element.type === "checkbox") {
              return (
                <TypeCheckbox key={index.toString()} attribute={element} />
              );
            } else if (allowedBtn.includes(element.type)) {
              return <TypeButton key={index.toString()} attribute={element} />;
            } else {
              return null;
            }
          })}
        </form>
      </div>
    );
  }
}
export default Main;
