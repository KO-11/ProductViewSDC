import React from 'react';

var FakeCarousel = function (props) {
  return (
  <div className="fakescroller">
    {props.images.map((image, index) => {
      return (
      <div key={index}>
          <img className="fakecarousel"src={image} onClick={props.handleClick} ></img>
      </div>
      )
    })}
  </div>
  )
}

export default FakeCarousel;