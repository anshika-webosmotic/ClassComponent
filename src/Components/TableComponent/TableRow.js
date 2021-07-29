import React from "react";

class TableRow extends React.Component {
  render() {
    const { record, index, handleEdit, handleDelete } = this.props;
    return (
      <tr id={index}  className="border">
        {Object.keys(record).map((item) => {
          if (item === "gender") {
            return (
              <td>
                {Object.keys(record[item]).map((data) => {
                  if (record[item][data]) {
                    return data + " ";
                  }
                  return null;
                })}
              </td>
            );
          } else if (item === "hobbies") {
            return (
              <td>
                {Object.keys(record[item]).map((data) => {
                  if (record[item][data]) {
                    return data + " ";
                  }
                  return null;
                })}
              </td>
            );
          } else {
            return <td>{record[item]}</td>;
          }
        })}
        <td className="d-flex justify-content-center border-0">
          <p onClick={handleDelete}>
            <img
              alt="del"
              src="https://img.icons8.com/material-outlined/24/000000/delete-trash.png"
            />
          </p>
          |
          <p onClick={handleEdit}>
            <img
              alt="edit"
              src="https://img.icons8.com/material-outlined/24/000000/edit-file--v1.png"
            />
          </p>{" "}
        </td>
      </tr>
    );
  }
}

export default TableRow;
