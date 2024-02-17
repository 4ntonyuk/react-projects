import React from "react";

type TypeProps = {
  fontSize: string,
  color?: string,
  imgUrl: string,
  link?: string,
  text: string,
}

type TypeStatic = {}

class IconText extends React.Component<TypeProps, TypeStatic> {
  constructor(props: TypeProps) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return(
      <a href={this.props.link} className="icon-text" style={{
        fontSize: this.props.fontSize,
        cursor: (this.props.link != undefined) ? "pointer" : "default",
        color: (this.props.color != undefined) ? this.props.color : "#414141",
      }}>
        <img src={this.props.imgUrl} />
        {this.props.text}
      </a>
    );
  }
}
export default IconText;