import React, { useEffect, useState } from "react"
import Select from "react-select"
import { uid } from "react-uid"
import { IFood } from "../../../../interfaces"
import BestSellersItem from "../../Main/BestSellers/BestSellersItem"

const options = [
	{ value: "name", label: "Названию" },
	{ value: "priceAbove", label: "По возрастанию цены" },
	{ value: "priceBelow", label: "По убыванию цены" },
]

interface CatalogWrapperProps {
	typeFoodList: [] | IFood[]
	selectedOption: any
	handleChange(selectedOption: any): void

	/* currentPage: number
	foodsPerPage: number
	onClickPage(event: any):void */

	/* allFoodList: [] | IFood[]
	currentFoods: [] | IFood[] */
}

function CatalogWrapper(props: CatalogWrapperProps) {

	/* const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.typeFoodList.length / props.foodsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number: any) => {
      return (
        <button 
			className='btn-page'
			id={number}
			key={number}
			onClick={event => props.onClickPage(event)}
        >
          {number}
        </button>
      );
    }); */


	return (
		<div className='catalog_wrapper'>
			<div className='catalog_sorting'>
				<div className='catalog_sorting_list'>
					<button className='btn btn-sort-item'>Размер</button>
					<button className='btn btn-sort-item'>Начинка</button>
					<button className='btn btn-sort-item'>Котлета</button>
					<button className='btn btn-sort-item'>Бифштекс</button>
				</div>

				<Select
					className='select_sort'
					value={props.selectedOption}
					onChange={props.handleChange}
					options={options}
				/>

			</div>
			<div className='catalog_list'>
				{props.typeFoodList.map((food: IFood) => {
					return <BestSellersItem food={food} key={uid(food)} />
				})}
			</div>
			<div className='paginator_pages'>
				<button 
					className='btn-page'
					id={"123"}
				>
					1
				</button>
				{/* <button className='btn-page material-icons'>chevron_left</button>
				<button className='btn-page'>1</button>
				<button className='btn-page'>2</button>
				<button className='btn-page'>3</button> */}
			</div>
		</div>
	)
}

export default CatalogWrapper
