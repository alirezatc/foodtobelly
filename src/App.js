import React from 'react';
import Restaurants from './components/restaurants/restaurants';
import SearchBar from './components/search-bar/search-bar';
import RestaurantService from './services/service';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      businesses: []
    }

    this.searchFoodToBelly = this.searchFoodToBelly.bind(this);
  }

  searchFoodToBelly(city, refine) {
    RestaurantService.search(city, refine).then(businesses => {
      this.setState({businesses: businesses});
    })
  }

  render() {
    return (
      <div className="app">
        <nav><h1>FoodToBelly</h1> <span className="logotype">No matter where you are</span></nav>
        <SearchBar searchFoodToBelly={this.searchFoodToBelly}/>
        <Restaurants businesses={this.state.businesses} />
      </div>
    );
  }
}
export default App;