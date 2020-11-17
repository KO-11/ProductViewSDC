import React from 'react';

var FakeCarousel = function (props) {
  return (
  <div>
    {props.images.map((image, index) => {
      return (
      <div>
          <img className="fakecarousel"src={image}></img>
      </div>
      )
    })}
  </div>
  )
}

export default FakeCarousel;