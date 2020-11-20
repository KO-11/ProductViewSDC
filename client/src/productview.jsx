import React from 'react';


var ProductView = function(props) {
  return(
    <div className="zoomContainer">
      <img className="mainviewer" src={props.item.imgUrl[0]}></img>
    </div>
  )
}

export default ProductView;