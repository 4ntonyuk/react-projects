import React from "react";
import SliderItem from "./SliderItem";

type TypeState = {
  sliderElement: number,
  heightSliderElemet: number,
  currentSliderOffset: number,
}

class Slider extends React.Component<{}, TypeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      sliderElement: 1,
      heightSliderElemet: Number(getComputedStyle(document.documentElement)
                          .getPropertyValue("--slider-height")
                          .replace("px", "")),
      currentSliderOffset: 0,
    };
  }
  render(): JSX.Element {
    {console.log(this.state.heightSliderElemet)}
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
  
}
export default Slider;