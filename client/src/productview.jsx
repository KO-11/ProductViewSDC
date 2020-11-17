import React from 'react';


var ProductView = function(props) {
  return(
    <div className="zoomContainer">
      <img className="mainviewer" width="300px"src={props.product.imgUrl[0]}></img>

    </div>
  )
}

export default ProductView;