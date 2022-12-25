import React from 'react';
import Category from './filterPartials/Category';
import Price from './filterPartials/Price';
import StarRating from './filterPartials/StarRating';
import SubCategory from './filterPartials/SubCategory';

const ShopFilter = ({
  changeChecked,
  subCategory,
  filterResult,
  category,
  filterResultRatings,
  rating,
}) => {
  return (
    <>
      <div className="f-group">
        <span className="f-groupTitle">CATEGORY</span>
        <Category filterResult={filterResult} category={category} />
      </div>
      <div className="f-group">
        <span className="f-groupTitle">SUBCATEGORY</span>
        <SubCategory changeChecked={changeChecked} subCategory={subCategory} />
      </div>
      <div className="f-group">
        {/* <span className="f-groupTitle">PRICE</span> */}
        <Price />
      </div>
      <div className="f-group">
        <span className="f-groupTitle">STAR RATING</span>
        <StarRating filterResultRatings={filterResultRatings} rating={rating} />
      </div>
    </>
  );
};

export default ShopFilter;
