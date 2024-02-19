import React from "react";

type TypeProps = {
  title?: string,
  description?: string,
  imgUrl?: string,
  link?: string,
}

class SliderItem extends React.Component<TypeProps, {}> {
  constructor(props: TypeProps) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return(
      <div className="slider-item">
        <img src={this.props.imgUrl} className="slider-item__bg"/>
        <div className="slider-item__title">
          {this.props.title}
        </div>
        <div className="slider-item__description">
          {this.props.description}
        </div>
        <a href={this.props.link} className="slider-item__link">
          Смотреть каталог
        </a>
      </div>
    );
  }
}
export default SliderItem;