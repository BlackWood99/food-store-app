import { useEffect, useState } from "react"
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
	const [activeType, setActiveType] = useState(props.match.params.type)
	const [foodList, setFoodList] = useState(props.food)
	const [typeFoodList, setTypeFoodList] = useState(foodList)
	const [selectedOption, setSelectedOption] = useState<any>(null)

	
	
	// Pagination
	/* 
	const [currentFoods, setCurrentFoods] = useState(typeFoodList)
	const [currentPage, setCurrentPage] = useState(1)
	const [foodsPerPage, setFoodsPerPage] = useState(12)

	const indexOfLastTodo = currentPage * foodsPerPage
    const indexOfFirstTodo = indexOfLastTodo - foodsPerPage

	

	const handleClick = (event: any) => {
		setCurrentPage(Number(event.target.id))
	}
	*/
	// ---

	useEffect(() => {
		setFoodList(props.food)
	}, [props.match])

	useEffect(() => {
		setActiveType(props.match.params.type)
	}, [props.match])

	const selectChangeHandler = (selectedValue: any) => {
		setSelectedOption(selectedValue.value)
	}

	useEffect(() => {
		console.log('type')
		switch (activeType) {
			case "Каталог":
				setTypeFoodList([...foodList])
				break
			case "Гамбургеры":
				setTypeFoodList(
					[...foodList.filter(
						(food: IFood | undefined) => food!.type === "gamburger"
					)]
				)
				break
			case "Сэндвичи":
				setTypeFoodList(
					[...foodList.filter(
						(food: IFood | undefined) => food!.type === "sandwich"
					)]
				)
				break
			case "Печеньки":
				setTypeFoodList(
					[...foodList.filter(
						(food: IFood | undefined) => food!.type === "cookie"
					)]
				)
				break
			case "Пирожные":
				setTypeFoodList(
					[...foodList.filter(
						(food: IFood | undefined) => food!.type === "cake"
					)]
				)
				break
			default:
				console.log("unknown food type")
				break
		}
	}, [activeType])

	useEffect(() => {
		console.log('select')
		switch (selectedOption) {
			case "name":
				setFoodList(
					[...typeFoodList.sort((a, b) =>
						a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1
					)]
				)
				break
			case "priceAbove":
				setFoodList(
					[...typeFoodList.sort((a, b) => (a.price > b.price ? 1 : -1))]
				)
				break
			case "priceBelow":
				setFoodList(
					[...typeFoodList.sort((a, b) => (a.price < b.price ? 1 : -1))]
				)
				break
			default:
				console.log("unknown option")
		}
	}, [selectedOption])

	/* useEffect(() => {
		setCurrentFoods([...typeFoodList.slice(indexOfFirstTodo, indexOfLastTodo)])
	}, [currentPage]) */

	return (
		<div className='catalog'>
			<CatalogDescription activeType={activeType} />
			<CatalogCategory />
			<CatalogWrapper
				/* allFoodList={foodList}
				currentFoods={currentFoods} */

				typeFoodList={typeFoodList} 

				selectedOption={selectedOption} 
				handleChange={selectChangeHandler}

				/* currentPage={currentPage}
				foodsPerPage={foodsPerPage}
				onClickPage={handleClick} */
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
