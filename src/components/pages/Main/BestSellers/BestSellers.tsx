//import React from "react"
import {uid} from "react-uid"
import { IFood } from "../../../../interfaces"
import BestSellersItem from "./BestSellersItem"

interface IBestSellersProps {
	bestSellerFood: IFood[]
}

function BestSellers(props: IBestSellersProps) {

	const bestSellerFood = props.bestSellerFood
        .sort((prev, next) => next.countOfSold - prev.countOfSold)
        .slice(0, 4)

	return (
		<div className='bestSeller'>
			{bestSellerFood.map((food: IFood) => {
				return <BestSellersItem food={food} key={uid(food)}/>
			})}
			
		</div>
	)
}

export default BestSellers
