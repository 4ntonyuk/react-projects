import React from "react";

type TypeState = {
  sliderElements: number,
  widthSliderElemet: number,
  currentSliderOffset: number,
}

class Slider extends React.Component<any, TypeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sliderElements: this.props.children,
      widthSliderElemet: Number(getComputedStyle(document.documentElement)
                          .getPropertyValue("--container-width")
                          .replace("px", "")),
      currentSliderOffset: 0,
    };
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }
  render(): JSX.Element {
    {console.log(this.state.widthSliderElemet)}
    return(
      <div className="slider container">
        <div className="slider__view">
          <div className="slider__all-pages" 
               style={{transform: `translateX: ${this.state.currentSliderOffset}px`}}>
            {this.props.children}
          </div>
        </div>
        <div className="slider__selectors">
          <button className="slider__selector-btn"></button>
          <button className="slider__selector-btn"></button>
        </div>
      </div>
    );
  }

  handleArrowClick(direction: string): void {
    switch(direction) {
      case "left":
        this.setState({
          currentSliderOffset: Math.min(this.state.currentSliderOffset + 
                                        this.state.widthSliderElemet, 0)
        })
        break;
      case "right":
        this.setState({
          currentSliderOffset: Math.max(
            this.state.currentSliderOffset - this.state.widthSliderElemet,
            -(this.state.sliderElements + this.state.sliderElements) // дописать!!!                              ~~~~~~~~~~~~~~~~~~~~
          )
        })
        break;
      default: break;
    }
  }
}
export default Slider;