import React from 'react';
import StarRatings from 'react-star-ratings';

class RatingsBar extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      rating: ''
    }
  }
  render() {
    // aggregateRating = 2.35;
    return (
      <div>
        <StarRatings
          rating={4.5}
          starRatedColor = 'orange'
          starDimension="16px"
          starSpacing="1px"
        />
      </div>
    );
  }
}

export default RatingsBar;