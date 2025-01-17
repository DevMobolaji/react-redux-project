import './category-item.style.scss'

import React from 'react'

export default function CategoryItem ({category}) {
    const { imageUrl, title } = category
  return (
    <div className='category-container'>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop now</p>
        </div>
    </div>
  )
}
