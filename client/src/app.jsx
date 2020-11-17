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
      clicked: false,
      mainprod: '',
      mainImage: ''
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
        var random = Math.floor(Math.random()*results.data.length);
        this.setState({
          allProds: results.data,
          mainprod: results.data[random],
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }
  handleClick(e) {
    this.setState({
      clicked: true,
      mainImage: e.target.src
    })
  }

  render() {
    if (this.state.mainprod === '') {
      return (
        <div>Welcome!</div>
      )
    }
    if (this.state.clicked === true) {
      return(
        <div>
          <div className="shopall">
            <a className="text" href="https://target.com/games">Shop All Games</a></div>
          <span id="productview">
          <div className="title"><h1>{this.state.mainprod.item}</h1></div>
          <div className="mainImageContainer">
            <img className="mainImage" src={this.state.mainImage}/>
          </div>

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
      return(
        <div>
          <div className="shopall">
            <a className="text" href="https://target.com/games">Shop All Games</a></div>
          <span id="productview">
          <div className="title"><h1>{this.state.mainprod.item}</h1></div>
            <ProductView item={this.state.mainprod}/>
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

export default App;