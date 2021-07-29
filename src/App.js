import React from "react";
import "./App.css";
import Main from "./Components/Main";
import ContentTable from "./Components/ContentTable";
import "bootstrap/dist/css/bootstrap.min.css";
import Local from "./Components/Util/Local";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localData: [],
      newValue: {},
    };
    this.handleRecords = this.handleRecords.bind(this);
    this.handleValues = this.handleValues.bind(this);
  }
  handleRecords(items) {
    this.setState({ localData: items });
  }
  handleValues(obj) {
    this.setState({ newValue: obj });
    console.log("values:", obj);
  }
  componentDidMount() {
    const localRecords = Local.getLocal();
    this.setState({ localData: localRecords });
  }
  render() {
    return (
      <div>
        <div className="container--fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-sm-12 col-lg-6 col-xs-12">
          <Main
            handleRecords={this.handleRecords}
            newValues={this.state.newValue}
          />
          </div>
          </div>
        </div>
        <div className="container-fluid">
          <ContentTable
            newRecords={this.state.localData}
            handleValues={this.handleValues}
          />
        </div>
      </div>
    );
  }
}

export default App;
