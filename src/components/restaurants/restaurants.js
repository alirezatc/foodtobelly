import React from 'react';
import './restaurants.css';
import Restaurant from '../restaurant/restaurant';

class Restaurants extends React.Component {
  render() {
    return (
      <div className="restaurant-list">
        {
          this.props.businesses.map(item => {
            return <Restaurant business={item} key={item.id}/>
          })
        }
      </div>
    )
  }
}

export default Restaurants;
