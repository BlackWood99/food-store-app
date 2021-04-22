import React from "react"
import { NavLink } from "react-router-dom"
import { IFood } from "../../../../interfaces"

interface IBestSellersItemProps {
	food: IFood
}

function BestSellersItem(props: IBestSellersItemProps) {
	const bestSell = props.food

	return (
		<div className='bestSeller_item'>
			<div className='top'>
				<div className='img'>
					<NavLink to={`/food/${bestSell.id}`}>
						<img src={bestSell.img} alt='gamburger' />
					</NavLink>
					{
							bestSell.discount ?
								<span className='img_discount'>{bestSell.discount}%</span> 
								: <></>
						}
				</div>
				<NavLink to={`/food/${bestSell.id}`}>{bestSell.name}</NavLink>
			</div>
			<div className='center'>
				<div className='text'>
					<p>{bestSell.title}</p>
				</div>
			</div>
			<div className='bot'>
				<h3 className='price'>{bestSell.price}</h3>
				<div className='buyBlock'>
					<div className='buyBlock_left'>
						<button className='btn btn-operator minus'>-</button>
						<input className='count' type='text' value={1} readOnly />
						<button className='btn btn-operator plus'>+</button>
					</div>
					<div className='buyBlock_right'>
						<button className='btn btn-cart material-icons'>
							shopping_cart
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BestSellersItem
