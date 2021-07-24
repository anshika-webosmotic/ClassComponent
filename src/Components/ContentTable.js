import React from "react";
import FormArray from "./FormArray";
class ContentTable extends React.Component {
  render() {
    const unAvailHeader = ["button", "submit", "reset"];
    return (
      <div>
        <table className="table px-4 my-3">
          <thead className="bg-dark text-white">
            <tr>
              {FormArray.map((element, index) => {
                if (!unAvailHeader.includes(element.type)) {
                  return <th key={index.toString()}>{element.label}</th>;
                } else {
                  return null;
                }
              })}
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default ContentTable;
