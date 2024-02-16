import React from "react";
import IconText from "../IconText/IconText";

// images
import phone from "./img/phone.svg";
import deliveryIcon from "./img/delivery-icon.svg";


class NavPanel extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return(
      <React.StrictMode>
        <div className="nav-panel">
          <div className="nav-panel__wrapper container">
            <div className="nav-panel__menu">
              <a href="#!">Главная</a>
              <a href="#!">О нас</a>
              <a href="#!">Контакты</a>
            </div>
            <div className="nav-panel__delivery">
              <IconText imgUrl={phone} fontSize="14px" text="8 (964) 89 99 119" color="#fff" />
              <IconText imgUrl={deliveryIcon} fontSize="14px" text="Доставка" color="#fff"/>
            </div>
          </div>
        </div>
      </React.StrictMode>  
    );
  }
}
export default NavPanel;