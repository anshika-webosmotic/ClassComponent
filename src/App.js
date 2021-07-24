import React from "react";
import "./App.css";
import Main from "./Components/Main";
import ContentTable from "./Components/ContentTable";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="container py-3">
        <div className="row">
          <div className="col-6 mx-auto">
            <Main />
          </div>
        </div>
        <ContentTable />
      </div>
    );
  }
}

export default App;
