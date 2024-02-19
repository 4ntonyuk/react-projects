import React from "react";
import IconText from "./components/IconText/IconText";
import Slider from "./components/Slider/Slider";
import SliderItem from "./components/Slider/SliderItem";


class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return(
      <>
        <div className="nav-panel">
          <div className="nav-panel__wrapper container">
            <div className="nav-panel__menu">
              <a href="#!">Главная</a>
              <a href="#!">О нас</a>
              <a href="#!">Контакты</a>
            </div>
            <div className="nav-panel__delivery">
              <IconText imgUrl="./img/nav-panel/phone.svg" fontSize="14px" 
                        text="8 (964) 89 99 119" color="#fff"/>
              <IconText imgUrl="./img/nav-panel/delivery-icon.svg" link="#!" fontSize="14px" 
                        text="Доставка" color="#fff"/>
            </div>
          </div>
        </div>
        <div className="header container">
          <a href="#!" className="header__logo">
            <img src="./img/header/logo.svg" />
          </a>
          <div className="header__search">
            <img src="./img/header/search-icon.svg" className="search-icon" />
            <input type="search" placeholder="Поиск" />
          </div>
          <div className="header__buttons">
            <a href="#!"><img src="./img/header/wishlist-icon.svg" /></a>
            <a href="#!"><img src="./img/header/bag.svg"/></a>
            <a href="#!"><img src="./img/header/profile-icon.svg"/></a>
          </div>
        </div>
        <div className="range-of-furniture container">
          <IconText imgUrl="./img/range-of-furniture/kitchen-icon.svg" link="#!"
                    fontSize="16px" text="Кухни"/>
          <IconText imgUrl="./img/range-of-furniture/bedroom-icon.svg" link="#!"
                    fontSize="16px" text="Спальни"/>
          <IconText imgUrl="./img/range-of-furniture/livingroom-icon.svg" link="#!" 
                    fontSize="16px" text="Гостинные"/>
          <IconText imgUrl="./img/range-of-furniture/closet-icon.svg" link="#!" 
                    fontSize="16px" text="Прихожие"/>
          <IconText imgUrl="./img/range-of-furniture/office-icon.svg" link="#!" 
                    fontSize="16px" text="Офисная мебель"/>
          <IconText imgUrl="./img/range-of-furniture/childrensroom-icon.svg" link="#!" 
                    fontSize="16px" text="Детская"/>
          <a href="#!" className="font-contrast-color">Акции</a>
          <button className="etc-button"><img src="./img/range-of-furniture/etc.svg"/></button>
        </div>
        <Slider>
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </Slider>
      </>  
    );
  }
}
export default App;