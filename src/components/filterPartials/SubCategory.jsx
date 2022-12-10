import React from 'react'

const SubCategory = ({subCategory, changeChecked}) => {
  return (
    <div className='f-filterDiv'>
      <div className='f-checkboxes'>
        {
          subCategory?.map((sub) => (
            <div key={sub._id} className='f-checkbox'>
              <label htmlFor={sub.label} className='f-filterLabel'>{sub.label}</label>
              <input type='checkbox' name='' className='f-check' id={sub.label} checked={sub.checked} onChange={() => changeChecked(sub._id)} />
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default SubCategory