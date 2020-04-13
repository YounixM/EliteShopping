import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategoryItems } from '../../redux/categories/categories.selector';

import "../../assets/styles/categories.scss";
import Category from "../Category/category.component";

function Categories (props){
  return (
    <div className="directory-menu">
        {
            props.categories.map((category) => {
                return <Category category={category} key={category.id}/>
            })
        }
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  categories: selectCategoryItems
});

export default connect(
  mapStateToProps
)(Categories);