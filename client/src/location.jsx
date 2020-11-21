import React from 'react';

class Location extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      system: this.props.system
    }
  }
  render() {
    if (this.props.system === 'PS5') {
      return(
        <div className="right-panel">
        <div id="pickup">
          <span className="pickup">Pick up today</span> at
          <div>
            <span><a href="https://www.target.com" className="text"><small>Edit Store</small></a></span>
            <button  id="button1"  className="button">Pick it up</button>
          </div>
          <div className="pickup-text"><small>Not available for pickup.</small></div>
          <span className="pickup-text"><small>Pre-order for pickup!</small></span>
        </div>
        <br/>
        <div id="sameday">
          <div className="sameday">Same Day Delivery</div>
          <button id="button2"className="button">Deliver It</button>
          <div><a href="https://www.target.com"className="text"><small>Edit zip code</small></a></div>
        </div>
        <br/>
        <div id="deliver">
          <span className="pickup">Deliver</span> to
          <div>
            <span><a href="https://www.target.com"className="text"><small>Edit zip code</small></a></span>
          </div>
            &nbsp;
          <div>
          <button id="button3"className="button">Ship it</button>
          </div>
        </div>
      </div>
      )
    } else {
      return(
        <div className="right-panel">
          <div id="pickup">
            <span className="pickup">Pick up today</span> at
            <div>
              <span><a href="https://www.target.com" className="text"><small>Edit Store</small></a></span>

              <button  id="button1"  className="button">Pick it up</button>
            </div>
            <div className="pickup-text"><small>Ready within 4 hours for pickup inside the store.</small></div>
            <span className="pickup-text"><small>Aisle D37</small></span>
          </div>
          <br/>
          <div id="sameday">
            <div className="sameday">Same Day Delivery</div>
            <button id="button2"className="button">Deliver It</button>
            <div><a href="https://www.target.com"className="text"><small>Edit zip code</small></a></div>
          </div>
          <br/>
          <div id="deliver">
            <span className="pickup">Deliver</span> to
            <div>
              <span><a href="https://www.target.com"className="text"><small>Edit zip code</small></a></span>
            </div>
              &nbsp;
            <div>
            <button id="button3"className="button">Ship it</button>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default Location;