import "../style/style.scss";
import React from "react";
import reactDom from "react-dom";
import { FirstComponent } from "./FirstComponent";

const App = (props) => {

  return (
    <div>
      <h1>Main Component</h1>
      <FirstComponent />
    </div>
  )

}


reactDom.render(<App />, document.getElementById("root"));