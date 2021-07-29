import React from "react";
import FormArray from "./FormArray";
import TableRow from "./TableComponent/TableRow";
import Local from "./Util/Local";
class ContentTable extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.newRecords);
    this.state = {
      localRecords: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentDidMount() {
    const localRecords = Local.getLocal();
    this.setState({ localRecords });
  }
  componentDidUpdate(prevProps) {
    const { newRecords } = this.props;
    if (prevProps.newRecords !== newRecords) {
      this.setState({ localRecords: newRecords });
    }
  }
  handleEdit(index) {
    const updatedRecords = Local.editRecord(index);
    const { handleValues } = this.props;
    handleValues(updatedRecords);
  }
  handleDelete(index) {
    console.log(index, "should be deleted");
    Local.delRecord(index);
    const localRecords = Local.getLocal();
    this.setState({ localRecords });
  }
  render() {
    const unAvailHeader = ["button", "submit", "reset"];
    return (
      <div className="row">
        <div className="table-responsive">
          <table className="table">
            <thead className="table-dark text-white">
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
            <tbody>
              {this.state.localRecords.map((element, index) => {
                return (
                  <TableRow
                    key={index.toString()}
                    record={element}
                    index={index}
                    handleDelete={() => this.handleDelete(index)}
                    handleEdit={() => this.handleEdit(index)}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ContentTable;
