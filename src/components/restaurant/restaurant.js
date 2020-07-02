import React from 'react';
import './restaurant.css';
import restaurantIcon from './restaurant-icon.jpg';

class Restaurant extends React.Component {
  priceViewer(n) {
    let price = ''
    for (let i = 0; i < n; i++) {
      price += '$';
    }
    return price;
  }

  render() {
    const { business } = this.props;

    return (
      <div className="Restaurant">
        <div className="image-container">
          <img src={restaurantIcon} alt={business.name} />
        </div>
        <div className="Restaurant-information">
          <h2>{business.name}</h2>
          <div className="Restaurant-address">
            <p>{business.address}</p>
            <p>{`${business.state}. ${business.city} ${business.zipCode}`}</p>
            <p className="area">{business.area}</p>
          </div>
          <div className="Restaurant-price">
            <h3 className="price">{this.priceViewer(business.price)}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Restaurant;
