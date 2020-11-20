import React from 'react';

var PriceView = function(props) {
  return(
    <div>
      <div>
        <h2>
          ${props.product.price}
        </h2>
      </div>
      <div className="quantity">
        <label>Quantity</label>
      </div>
        <div className="dropdown">
          <select name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
          <input type="checkbox" className="checkbox"></input>
          <span className="allstate">Allstate 2 Year Video Games Protection Plan</span>
          <div className="additional">
            <b>$5.00</b>
          </div>
          <small>
            <a className="text" id="plan"href="https://target.com/games">See plan details</a>
          </small>

    </div>
  )
}

export default PriceView;
