import React from 'react'

const Category = ({category, filterResult}) => {
  return (
    <div className='f-filterDiv'>
      <div className="f-buttons">
        <button onClick={() => filterResult()} className='f-button'>All</button>
        {
          category?.map((cat) => (
            <button onClick={() => filterResult(cat.label)} key={cat._id} className='f-button'>{cat.label}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Category