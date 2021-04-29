import React from "react"
import { NavLink } from "react-router-dom"
import { IFood } from "../../../../interfaces"
import { Counter } from "../../../utils/Counter/Counter"

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
				<Counter foodItem={bestSell}/>
			</div>
		</div>
	)
}

export default BestSellersItem
