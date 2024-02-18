import React from "react";

type TypeProps = {
  title?: string,
  description?: string,
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
        
      </div>
    );
  }
}
export default SliderItem;