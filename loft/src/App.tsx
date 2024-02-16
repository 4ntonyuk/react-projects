import React from "react";
import IconText from "./components/IconText/IconText";

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return(
      <React.StrictMode>
        <div className="nav-panel">
          <div className="nav-panel__menu">
            <a href="#!">Главная</a>
            <a href="#!">О нас</a>
            <a href="#!">Контакты</a>
          </div>
          <div className="nav-panel__delivery">
            <IconText imgUrl="./img/nav-panel/phone.svg" fontSize="14px" text="8 (964) 89 99 119" />
            <IconText imgUrl="./img/nav-panel/delivery-icon.svg" fontSize="" text="Доставка" />
          </div>
        </div>
      </React.StrictMode>  
    );
  }
}
export default App;