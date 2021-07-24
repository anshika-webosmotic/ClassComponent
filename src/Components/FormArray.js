const FormArray = [
  {
    type: "null",
    key: "userId",
    label: "User Id",
    name: "userId",
    unique: false,
    isVisible: false,
    hidden: true,
    value: Math.floor(Math.random() * (100 - 0 + 1)) + 1,
    attr: {
      className: "form-control",
    },
    getValue: function (elementsArray, obj) {
      // return getRandomNumber();
      return new Date().getTime();
    },
  },
  {
    type: "text",
    label: "Name",
    key: "name",
    value: "",
    attr: {
      id: "txtName",
      className: "form-control",
      placeholder: "Enter name",
      name: "name",
      required: "true",
      onfocus: "console.log('hii')",
      onkeypress: function (e) {
        console.log("keypressed", e);
      },
      onchange: function (e) {
        console.log("keychange", e);
      },
    },
  },
  {
    type: "email",
    label: "Email",
    key: "email",
    value: "",
    attr: {
      id: "txtEmail",
      className: "form-control",
      placeholder: "Enter email",
      name: "email",
      required: "true",
      onchange: function (e) {
        console.log("keychange", e);
      },
    },
  },
  {
    type: "tel",
    label: "Phone",
    key: "phone",
    value: "",
    attr: {
      id: "txtPhone",
      className: "form-control",
      placeholder: "Enter phone number",
      name: "phone",
      required: "true",
      onchange: function (e) {
        console.log("keychange", e);
      },
    },
  },
  {
    type: "textarea",
    label: "Address",
    key: "address",
    value: "",
    attr: {
      id: "txtAddress",
      className: "form-control",
      placeholder: "Enter Address",
      rows: "5",
      name: "address",
      required: "true",
      onchange: function (e) {
        console.log("keychange", e);
      },
    },
  },
  {
    type: "text",
    label: "Street Address",
    key: "street_address",
    value: "",
    attr: {
      id: "txtStreet",
      className: "form-control",
      placeholder: "Enter Street Address",
      name: "street_address",
      required: "true",
      onchange: function (e) {
        console.log("keychange", e);
      },
    },
  },
  {
    type: "text",
    label: "City",
    key: "city",
    value: "",
    attr: {
      id: "txtCity",
      className: "form-control",
      placeholder: "Enter City",
      name: "city",
      required: "true",
      onchange: function (e) {
        console.log("keychange", e);
      },
    },
  },
  {
    type: "text",
    label: "State",
    key: "state",
    value: "",
    attr: {
      id: "txtState",
      className: "form-control",
      placeholder: "Enter State",
      name: "state",
      required: "true",
      onchange: function (e) {
        console.log("keychange", e);
      },
    },
  },
  {
    type: "number",
    label: "Pin Code",
    key: "pin_code",
    value: "",
    attr: {
      id: "txtPincode",
      className: "form-control",
      placeholder: "Enter Pin Code",
      name: "pin_code",
      min: "3",
      required: "true",
      onchange: function (e) {
        console.log("keychange", e);
      },
    },
  },
  {
    type: "radio",
    label: "Gender",
    key: "gender",
    options: [
      {
        innerHTML: "Male",
        value: "male",
        name: "gender",
        attr: {
          id: "male",
          //classNameName: 'radioGender',
          required: "true",
        },
      },
      {
        innerHTML: "Other",
        value: "other",
        name: "gender",
        attr: {
          id: "other",
          //classNameName: 'radioGender',
          required: "true",
        },
      },
      {
        innerHTML: "Female",
        value: "female",
        name: "gender",
        attr: {
          id: "female",
          //classNameName: 'radioGender',
          required: "true",
        },
      },
    ],
  },
  // {
  //   type: "file",
  //   key: "file",
  //   value: "",
  //   strVal: "",
  //   label: "Files",
  //   attr: {
  //     id: "file",
  //     className: "form-control",
  //     name: "file",
  //     // onchange: function (file) {
  //     //   console.log(file);
  //     // },
  //   },
  // },
  {
    type: "checkbox",
    label: "Hobbies",
    key: "hobbies",
    //value: '',
    options: [
      {
        innerHTML: "Swimming",
        value: "swimming",
        name: "hobbies",
        attr: {
          id: "swimming",
          className: "radioHobbies",
          // onchange: function (e) {
          //   console.log(e);
          // },
        },
      },
      {
        innerHTML: "Singing",
        value: "singing",
        name: "hobbies",
        attr: {
          id: "singing",
          className: "radioHobbies",
          // onchange: function (e) {},
        },
      },
      {
        innerHTML: "Writing",
        value: "writing",
        name: "hobbies",
        attr: {
          id: "writing",
          className: "radioHobbies",
          // onchange: function (e) {},
        },
      },
    ],
  },
  {
    type: "submit",
    attr: {
      id: "btnSubmit",
      name: "btnSubmit",
      className: "btn submit",
      value: "Submit",
    },
  },
  {
    type: "reset",
    attr: {
      id: "btnReset",
      name: "btnReset",
      className: "btn reset",
      value: "Reset",
      // onclick: (e, obj, array) => {},
    },
  },
];
export default FormArray;
