import React, { Component } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategoryItems } from '../../redux/categories/categories.selector';

import "../../assets/styles/categories.scss";
import Category from "../Category/category.component";

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="directory-menu">
          {
              this.props.categories.map((category) => {
                  return <Category category={category} key={category.id}/>
              })
          }
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  categories: selectCategoryItems
});

export default connect(
  mapStateToProps
)(Categories);