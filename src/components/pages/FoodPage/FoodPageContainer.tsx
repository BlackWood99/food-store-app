import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { uid } from "react-uid"
import { IFood, IFoodStateConnect } from "../../../interfaces"
import { Counter } from "../../utils/Counter/Counter"

interface IFoodPageProps {
	food: [] | IFood[]
	match: any
}

function FoodPageContainer(props: IFoodPageProps) {
	const [id, setId] = useState(props.match.params.id)

	useEffect(() => {
		setId(props.match.params.id)
	}, [props.match.params.id])

	const currFood = props.food.find((food) => food.id === Number(id))

	/////
	if (currFood === undefined) return <h1>Unknown food</h1>
	/////
	let priceWithDiscount = 0
	if (currFood.discount) {
		priceWithDiscount = Math.round(
			currFood.price - (currFood?.price * currFood?.discount) / 100
		)
	}

	return (
		<div className='foodPage'>
			<div className='foodPage_preview'>
				<div className='img'>
					<div className='img_list'>
						<img
							src={
								"https://pbs.twimg.com/profile_images/656280746567471105/bh9VZlLZ.jpg"
							}
							alt='gamburger'
						/>
						<img
							src={
								"https://pbs.twimg.com/profile_images/656280746567471105/bh9VZlLZ.jpg"
							}
							alt='gamburger'
						/>
						<img
							src={
								"https://pbs.twimg.com/profile_images/656280746567471105/bh9VZlLZ.jpg"
							}
							alt='gamburger'
						/>
					</div>
					<div className='img_main'>
						<img src={currFood.img} alt='gamburger' />
						{currFood.discount ? (
							<span className='img_main_discount'>
								{currFood.discount}%
							</span>
						) : (
							<></>
						)}
					</div>
				</div>
				<div className='info'>
					<div className='info_name'>
						<h3>{currFood.name}</h3>
					</div>
					<div className='info_composition'>
						<p>{currFood.title}</p>
					</div>
					{currFood.type === "gamburger" ? (
						<div className='info_select'>
							<div className='info_select_item'>
								<span>Размер</span>
								<select name='sel_size' id='sel_size1'>
									{currFood.size.map((size: string) => {
										return (
											<option value={size} key={uid(size)}>
												{size}
											</option>
										)
									})}
								</select>
							</div>
							<div className='info_select_item'>
								<span>Котлета</span>
								<select name='sel_kotleta' id='sel_size2'>
									{currFood.cutlet.map((cutlet: string) => {
										return (
											<option value={cutlet} key={cutlet}>
												{cutlet}
											</option>
										)
									})}
								</select>
							</div>
						</div>
					) : (
						<></>
					)}
					<div className='info_price'>
						{currFood.discount ? (
							<div className='discount'>{priceWithDiscount},00 руб</div>
						) : (
							<></>
						)}
						<div
							className='main'
							style={
								currFood.discount
									? { textDecoration: "line-through" }
									: undefined
							}
						>
							{currFood.price},00 руб
						</div>
					</div>

					<Counter foodItem={currFood} />
				</div>
			</div>
			<div className='characteristic'>
				<div className='characteristic_header'>
					<button className='btn_ch'>Описание</button>
					<button className='btn_ch'>Характеристики</button>
					<button className='btn_ch'>Отзывы</button>
				</div>
				<div className='characteristic_body'>
					<div className='characteristic__description'>
						<p>{currFood.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state: IFoodStateConnect) => {
	return {
		food: state.foodPage.food,
	}
}

export default connect(mapStateToProps, null)(FoodPageContainer)
