import React from 'react'
import { NavLink } from "react-router-dom"
import imgGamb from "../../../../assets/images/food/category/gamb.jpg"
import imgSandwich from "../../../../assets/images/food/category/sandwich.jpg"
import imgCookie from "../../../../assets/images/food/category/cookie.jpg"
import imgCake from "../../../../assets/images/food/category/cake.jpg"

interface ICatalogCategoryProps {
}

export default React.memo(function CatalogCategory(props: ICatalogCategoryProps) {
	return (
		<div className='category'>
			<div className='category_item'>
				<div className='img_block'>
					<img src={imgGamb} alt='' />
				</div>
				<NavLink to={'/catalog/Гамбургеры'} className='link'>
					Гамбургеры
				</NavLink>
			</div>
			<div className='category_item'>
				<div className='img_block'>
					<img src={imgSandwich} alt='' />
				</div>
				<NavLink to={'/catalog/Сэндвичи'} className='link'>
					Сэндвичи
				</NavLink>
			</div>
			<div className='category_item'>
				<div className='img_block'>
					<img src={imgCookie} alt='' />
				</div>
				<NavLink to={'/catalog/Печеньки'} className='link'>
					Печеньки
				</NavLink>
			</div>
			<div className='category_item'>
				<div className='img_block'>
					<img src={imgCake} alt='' />
				</div>
				<NavLink to={'/catalog/Пирожные'} className='link'>
					Пирожные
				</NavLink>
			</div>
		</div>
	)
})

//export default CatalogCategory
