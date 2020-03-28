import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import "../../assets/styles/category.scss";

class Category extends Component {
  constructor(props) {
    super(props);

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleCategoryClick () {
      this.props.history.push(`${this.props.match.url}${this.props.category.linkUrl}`)
  }

  render() {
    let { category } = this.props;

    return (
      <div className={`${category.size} menu-item`} onClick={this.handleCategoryClick}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${category.imageUrl}  )`
          }}>
              
        </div>
        <div className="content">
          <h1 className="title">{category.name} </h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
}

export default Category = withRouter(Category);
