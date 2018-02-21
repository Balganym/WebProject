
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import ContentView from './ContentView';
import Login from './Login';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Register from './Register';
import SearchBar from './SearchBar';
import ListToggle from './ListToggle'
import './CategoryItem.css';


class CategoryItem extends Component {
  render: function() {
    return (
      <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}} >
        <div className="overlay">
          <div className="title">{this.props.title}</div>
          <div className="rating">{this.props.score} / 10</div>
          <div className="plot">{this.props.overview}</div>
          <ListToggle />
        </div>
      </div>
    );
}
}
export default CategoryItem;