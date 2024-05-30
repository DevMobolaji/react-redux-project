import React from 'react'
import './category.style.scss'
import CategoryItem from '../category-item/Category-item'


export default function Category({category}) {
  return (
    <div className="categories-container">
      {
        category.map((categories) =>
          (
            <CategoryItem key={categories.id} category={categories}/>
          )
        )
      }
    </div>
  )
}
