import React from 'react';
import ProductView from './productview.jsx';
import PriceView from './priceview.jsx';
import Location from './location.jsx';
import FakeCarousel from './fakecarousel.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allProds: [],
      mainprod: ''
    }
    this.getProduct = this.getProduct.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.getProduct();
  }
  getProduct() {
    axios.get('/products')
      .then((results) => {
        this.setState({
          allProds: results.data,
          mainprod: results.data[0]
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }
  handleClick(e) {
    this.setState({
      mainprod: e.target.value
    })
  }

  render() {
    if (this.state.mainprod === '') {
      return (
        <div>Welcome!</div>
      )
    } else {
      return(
        <div>
          <div className="shopall">
            <a className="text" href="https://target.com/games">Shop All Games</a></div>
          <span id="productview">
          <div className="title"><h2>{this.state.mainprod.item}</h2></div>
            <ProductView product={this.state.mainprod}/>
          </span>
          <span id="fakecarousel">
            <FakeCarousel images={this.state.mainprod.imgUrl} handleClick={this.handleClick} />
          </span>
          <span className="price">
            <PriceView product={this.state.mainprod}/>
          </span>
          <div className="location">
            <Location />
          </div>
        </div>
      )
    }
  }
}

export default App;