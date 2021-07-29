import React from "react";
import FormArray from "./FormArray";
import TypeCheckbox from "./FormComponent/TypeCheckbox";
import TypeInput from "./FormComponent/TypeInput";
import TypeRadio from "./FormComponent/TypeRadio";
import TypeTextarea from "./FormComponent/TypeTextarea";
import TypeButton from "./FormComponent/TypeButton";
import TypeNull from "./FormComponent/TypeNull";
import Local from "./Util/Local";
import TypeNumber from "./FormComponent/TypeNumber";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactForm: {
        userId: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        street_address: "",
        city: "",
        state: "",
        pin_code: "",
        gender: {
          female: false,
          male: false,
          other: false,
        },
        hobbies: {
          swimming: false,
          singing: false,
          writing: false,
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }
  componentDidMount() {
    Local.createLocal();
    const getId = Local.getId();
    const contactForm = { ...this.state.contactForm };
    contactForm.userId = getId;
    this.setState({ contactForm });
    // this.setState({ userId: getId });
  }
  componentDidUpdate(prevProps, prevState) {
    const { newValues } = this.props;
    if (prevProps.newValues !== newValues) {
      this.setState({ contactForm: newValues });
    }
  }
  handleChange(event) {
    const contactForm = { ...this.state.contactForm };
    contactForm[event.target.name] = event.target.value;
    this.setState({ contactForm });
  }
  handleSubmit(event) {
    event.preventDefault();
    Local.setLocal(this.state.contactForm);
    const contactForm = {
      userId: Local.getId(),
      name: "",
      email: "",
      phone: "",
      address: "",
      street_address: "",
      city: "",
      state: "",
      pin_code: "",
      gender: {
        male: false,
        other: false,
        female: false,
      },
      hobbies: {
        swimming: false,
        singing: false,
        writing: false,
      },
    };
    this.setState({ contactForm });
    const { handleRecords } = this.props;
    handleRecords(Local.getLocal());
  }
  handleCheckBox(event) {
    let contactForm = {...this.state.contactForm};
    contactForm.hobbies[event.target.value] = event.target.checked;
    this.setState({contactForm});
  }
  handleRadio(event) {
    let contactForm = {...this.state.contactForm};
    const gen = { ...contactForm.gender };
    Object.keys(gen).forEach((key, index) => {
        gen[key] = false;
      });
    contactForm.gender = { ...gen };
    contactForm.gender[event.target.value] = event.target.checked;
    this.setState({contactForm});
  }
  render() {
    const allowedType = ["text", "tel", "password", "email"];
    const allowedBtn = ["button", "submit", "reset"];
    const contactForm = { ...this.state.contactForm };
    return (
      <div className="row">
        <div className="col-12">
        <form
          className="p-3 bg-light shadow rounded"
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <h2 className="px-4">REGISTRATION</h2>
          {FormArray.map((element, index) => {
            if (allowedType.includes(element.type)) {
              return (
                <TypeInput
                  key={index.toString()}
                  attribute={element}
                  valueToInput={contactForm[`${element.key}`]}
                  dataChange={this.handleChange}
                />
              );
            } else if (element.type === "null") {
              return (
                <TypeNull
                  key={index.toString()}
                  attribute={element}
                  valueToInput={contactForm[`${element.key}`]}
                />
              );
            } else if (element.type === "number") {
              return (
                <TypeNumber
                  key={index.toString()}
                  attribute={element}
                  dataChange={this.handleChange}
                  valueToInput={contactForm[`${element.key}`]}
                />
              );
            } else if (element.type === "textarea") {
              return (
                <TypeTextarea
                  key={index.toString()}
                  attribute={element}
                  dataChange={this.handleChange}
                  valueToInput={contactForm[`${element.key}`]}
                />
              );
            } else if (element.type === "radio") {
              return (
                <TypeRadio
                  key={index.toString()}
                  attribute={element}
                  dataChange={this.handleRadio}
                  checked={contactForm.gender[element.options.value]}
                  valueToInput={contactForm[`${element.key}`]}
                />
              );
            } else if (element.type === "checkbox") {
              return (
                <TypeCheckbox
                  key={index.toString()}
                  attribute={element}
                  dataChange={this.handleCheckBox}
                  checked={contactForm.hobbies[element.options.value]}
                  valueToInput={contactForm[`${element.key}`]}
                />
              );
            } else if (allowedBtn.includes(element.type)) {
              return <TypeButton key={index.toString()} attribute={element} />;
            } else {
              return null;
            }
          })}
        </form>
        </div>
      </div>
    );
  }
}
export default Main;
