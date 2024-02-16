import React from "react";
import NavPanel from "./components/NavPanel/NavPanel";

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return(
      <React.StrictMode>
        <NavPanel />
      </React.StrictMode>  
    );
  }
}
export default App;