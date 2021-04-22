import React from "react"
import { NavLink } from "react-router-dom"
import img from "../../../../assets/images/food/category/gamb.jpg"

function CatalogCategoryItem() {
	return (
		<div className='category_item'>
			<img src={img} alt='' />
			<NavLink to='/' className="link">Гамбургеры</NavLink>
		</div>
	)
}

export default CatalogCategoryItem
