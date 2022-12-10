import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Empty from './Empty'
import Search from './filterPartials/Search'
import ShopFilter from './ShopFilter'
import ShopProducts from './ShopProducts'

const ShopMainPart = () => {

  const [products, setProducts] = useState([]) //default is empty, no products
  const [category, setCategory] = useState([]);//default is empty, no categories
  const [rating, setRating] = useState([])//default is empty, no ratings
  const [subCategory, setSubCategory] = useState([])

  const [list, setList] = useState(products) //get all products when fetch products

  const [inputSearch, setInputSearch] =   useState('')//for search is empty
  const [resultFound, setResultFound] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedRating, setSelectedRating] = useState()

  //value when i click on button
  const filterResult = (cartItem) => {
    setSelectedCategory(cartItem)
  }

  //value when we click button -> for ratings
  const filterResultRatings = (starItem) => {
    setSelectedRating(starItem)
  }

  //value when i click on checkbox ->id
  const handleChangeChecked = (id) => {
    const subcategoryList = subCategory
    const changeCheckedSubcategory = subcategoryList?.map((item) => item._id === id ? {...item, checked: !item.checked} : item)
    setSubCategory(changeCheckedSubcategory)
  }

  useEffect(() => {

    //filtering Products
    const applyFilters = () => {
      let updateProductList = products;

      //Category Filters
      if(selectedCategory){
        updateProductList = updateProductList.filter((item) => item.category === selectedCategory)
      }

      //Subcategory Filters
      const subcategoryChecked = subCategory.filter((item) => item.checked).map((item) => item.label)
      //console.log(subcategoryCheked.length)
      if(subcategoryChecked.length) {
        updateProductList = updateProductList.filter((item) => subcategoryChecked.includes(item.subcategory))
      }


      //Rating Filters
      if(selectedRating){
        updateProductList = updateProductList.filter((item) => item.star === selectedRating)
      }

      //search Filter
      if(inputSearch){
        updateProductList = updateProductList.filter((item) => item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1)
      }

      setList(updateProductList)

      !updateProductList.length ? setResultFound(false) : setResultFound(true)
    }

    applyFilters()
  }, [inputSearch, products, selectedCategory, selectedRating, subCategory])

  useEffect(() => {

    //fetch all product from db
    const fetchData = async() => {
      const resultProducts = await axios.get('/api/products/all')

      const resultProductsData = resultProducts.data

      //show first latest products
      const sortResultProductsData = resultProductsData.sort((a,b) => b.createdAt.localeCompare(a.createdAt))


      // console.log(sortResultProductsData)
      setProducts(sortResultProductsData)

      //fetch all Category
      const resultCategory = await axios('api/category/all');
      // console.log(resultCategory.data)
      setCategory(resultCategory.data)


      //fetch all Rating
      const resultRating = await axios('api/rating/all');
      // console.log(resultRating.data)
      setRating(resultRating.data)

      //fetch all Subcategories
      const resultSubcategory = await axios.get("/api/subcategory/all");
      // console.log(resultSubcategory.data)
      setSubCategory(resultSubcategory.data);

    }

    fetchData()

  },[])


  return (
    <>
    <div className='hidden sm:block s-container mr-2'>
      <div className='s-row'>
        <h2 className='s-title text-4xl'>SHOP</h2>
      </div>
      <div className='s-row'>
        <div className='s-col'>
          <h3 className="s-filters">FILTERS</h3>
          <div className='f-groupTitle'>
              <span className='f-groupTitle'>SEARCH</span>
              <Search value={inputSearch} changeInput={(e) => setInputSearch(e.target.value)} />
          </div>
          <div className="s-filterGroups">
            <ShopFilter filterResult={filterResult} category={category} filterResultRatings={filterResultRatings} rating={rating} subCategory={subCategory} changeChecked={handleChangeChecked}/>
          </div>
        </div>
        <div className='s-col'>
          {resultFound ? <ShopProducts list={list} /> : (<Empty />)}
        </div>
      </div>
    </div>

    {/* MOBILE MENU */}
    <div className='sm:hidden font-bold'>
      <div className='s-row'>
        <h2 className='s-title'>SHOP</h2>
      </div>
      <div className='s-row flex flex-col'>
        <div className='s-col'>
          <h3 className="s-filters">Filters</h3>
          <div className='f-groupTitle'>
              <span className='f-groupTitle'>SEARCH</span>
              <Search value={inputSearch} changeInput={(e) => setInputSearch(e.target.value)} />
          </div>
          <div className="s-filterGroups w-[90%]">
            <ShopFilter filterResult={filterResult} category={category} filterResultRatings={filterResultRatings} rating={rating} subCategory={subCategory} changeChecked={handleChangeChecked} />
          </div>
        </div>
        <div className='s-col'>
          {resultFound ? <ShopProducts list={list} /> : (<Empty />)}
        </div>
      </div>
    </div>
    </>
  )
}

export default ShopMainPart