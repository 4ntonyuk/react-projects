import React from "react";

type TypeProps = {
  fontSize: string,
  imgUrl: string,
  link: string,
  text: string,
}

type TypeStatic = {

}

class IconText extends React.Component<TypeProps, TypeStatic> {
  constructor(props: TypeProps) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return(
      <div className="icon-text">
        <img src={this.props.imgUrl} alt="" />
        {(this.props.link != undefined) ? 
          <a href={this.props.link} style={{fontSize: this.props.fontSize}}>{this.props.text}</a> 
          : <span style={{fontSize: this.props.fontSize}}>{this.props.text}</span>} 
      </div>
    );
  }
}
export default IconText;