import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { IFood, IFoodStateConnect } from "../../../interfaces"
import CatalogCategory from "./CatalogCategory/CatalogCategory"
import CatalogDescription from "./CatalogDescription/CatalogDescription"
import CatalogWrapper from "./CatalogWrapper/CatalogWrapper"

interface ICatalogProps {
	food: [] | IFood[]
	match: any
}

function CatalogContainer(props: ICatalogProps) {

	const [foodList, setFoodList] = useState(props.food)
	const [activeType, setActiveType] = useState(props.match.params.type)
	const [selectedOption, setSelectedOption] = useState('name')
	const [foodLength, setFoodLength] = useState(foodList.length)
	const [currentFoods, setCurrentFoods] = useState<[] | IFood[]>(foodList)
	const [currentPage, setCurrentPage] = useState(1)
	const foodsPerPage = 12

	const handleClick = (event: any) => {
		setCurrentPage(Number(event.target.id))
	}

	const selectChangeHandler = (selectedValue: any) => {
		setSelectedOption(selectedValue.value)
	}

	useEffect(() => {
		setActiveType(props.match.params.type)
		setCurrentPage(1)
	}, [props.match])

	useEffect(() => {
		setFoodList(props.food)
	}, [props.food])

	useEffect(() => {

		let newFoods = [...foodList]

		switch (activeType) {
			case "Каталог":
				newFoods = [...foodList]
				setFoodLength(newFoods.length)
				break
			case "Гамбургеры":
				newFoods = 
					[...newFoods.filter(
						(food: IFood | undefined) => food!.type === "gamburger"
					)]
				break
			case "Сэндвичи":
				newFoods = 
					[...newFoods.filter(
						(food: IFood | undefined) => food!.type === "sandwich"
					)]
				break
			case "Печеньки":
				newFoods = 
					[...newFoods.filter(
						(food: IFood | undefined) => food!.type === "cookie"
					)]
				break
			case "Пирожные":
				newFoods = 
					[...newFoods.filter(
						(food: IFood | undefined) => food!.type === "cake"
					)]
				break
			default:
				console.log("unknown food type")
				break
		}

		switch (selectedOption) {
			case "name":
				newFoods =
					[...newFoods.sort((a, b) =>
						a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1
					)]
				
				break
			case "priceAbove":
				newFoods =
					[...newFoods.sort((a, b) => (a.price > b.price ? 1 : -1))]
				
				break
			case "priceBelow":
				newFoods =
					[...newFoods.sort((a, b) => (a.price < b.price ? 1 : -1))]
				
				break
			default:
				console.log("unknown option")
		}

		const indexOfLastTodo = currentPage * foodsPerPage
    	const indexOfFirstTodo = indexOfLastTodo - foodsPerPage

		setFoodLength(newFoods.length)
		
		setCurrentFoods(() => {
			return [...newFoods.slice(indexOfFirstTodo, indexOfLastTodo)]
		})
		
	}, [activeType, selectedOption, currentPage, foodList])

	return (
		<div className='catalog'>
			<CatalogDescription activeType={activeType} />
			<CatalogCategory />
			<CatalogWrapper
				currentFoods={currentFoods}

				foodLength={foodLength} 

				selectedOption={selectedOption} 
				handleChange={selectChangeHandler}

				currentPage={currentPage}
				foodsPerPage={foodsPerPage}
				onClickPage={handleClick}
			/>
		</div>
	)
}

const mapStateToProps = (state: IFoodStateConnect) => {
	return {
		food: state.foodPage.food,
	}
}

export default connect(mapStateToProps, null)(CatalogContainer)
