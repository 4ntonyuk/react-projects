import React from "react";
import IconText from "../IconText/IconText";

// images
import bedroomIcon from "./img/bedroom-icon.svg";
import childrensroomIcon from "./img/childrensroom-icon.svg";
import closetIcon from "./img/closet-icon.svg";
import etcIcon from "./img/etc.svg";
import kitchenIcon from "./img/kitchen-icon.svg";
import livingroomIcon from "./img/livingroom-icon.svg";
import officeIcon from "./img/office-icon.svg";

class RangeOfFurniture extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return(
      <div className="range-of-furniture container">
        <IconText imgUrl={kitchenIcon} link="#!"  fontSize="16px" text="Кухни"/>
        <IconText imgUrl={bedroomIcon} link="#!" fontSize="16px" text="Спальни"/>
        <IconText imgUrl={livingroomIcon} link="#!" fontSize="16px" text="Гостинные"/>
        <IconText imgUrl={closetIcon} link="#!" fontSize="16px" text="Прихожие"/>
        <IconText imgUrl={officeIcon} link="#!" fontSize="16px" text="Офисная мебель"/>
        <IconText imgUrl={childrensroomIcon} link="#!" fontSize="16px" text="Детская"/>
        <a href="#!" className="font-contrast-color">Акции</a>
        <button className="etc-button"><img src={etcIcon} /></button>
      </div>
    );
  }
}
export default RangeOfFurniture;