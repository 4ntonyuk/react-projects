import React from "react";
import SliderItem from "./SliderItem";

type TypeState = {
  sliderElement: number,
  widthSliderElemet: number,
  currentSliderOffset: number,
}

class Slider extends React.Component<{}, TypeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      sliderElement: 1,
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
      <div className="slider">
        <div className="slider__view">
          <div className="slider__all-pages" 
               style={{transform: `translateX: ${this.state.currentSliderOffset}px`}}>
            <SliderItem />
          </div>
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
            -(this.state.sliderElement) // дописать!!!                              ~~~~~~~~~~~~~~~~~~~~
          )
        })
        break;
      default: break;
    }
  }
}
export default Slider;