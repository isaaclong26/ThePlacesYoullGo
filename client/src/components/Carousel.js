import React from "react";
import "./css/Carousel_style.css"

function Carousel(props) {
  return (
    <div id="carouselWrapperFade" className="carousel slide carousel-fade" data-ride="carousel" {...props}>
      {props.children}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100 img1" />
          <div className="carousel-caption">
            <h1><a href="https://www.gotokyo.org/en/index.html">Tokyo</a></h1>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 img2" />
          <div className="carousel-caption">
            <h1><a href="https://www.australia.com/en-us/places/brisbane-and-surrounds/guide-to-brisbane.html">Brisbane</a></h1>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 img3" />
          <div className="carousel-caption">
            <h1><a href="https://www.travelandleisure.com/travel-guide/ile-de-france-paris">Paris</a></h1>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselWrapperFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous Slide</span>
      </a>
      <a className="carousel-control-next" href="#carouselWrapperFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next Slide</span>
      </a>
    </div>

    
  );
}

export default Carousel;