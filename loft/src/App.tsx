import React from "react";
import NavPanel from "./components/NavPanel/NavPanel";
import Header from "./components/Header/Header";

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return(
      <React.StrictMode>
        <NavPanel />
        <Header />
      </React.StrictMode>  
    );
  }
}
export default App;