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
	selectedOption: any
	handleChange(selectedOption: any): void
	
	currentPage: number
	foodsPerPage: number
	onClickPage(event: any):void
	foodLength: number

	currentFoods: [] | IFood[]
}

function CatalogWrapper(props: CatalogWrapperProps) {

	const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.foodLength / props.foodsPerPage); i++) {
      pageNumbers.push(i)
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
      )
    })

	return (
		<div className='catalog_wrapper'>
			<div className='catalog_sorting'>

				<Select
					className='select_sort'
					value={props.selectedOption}
					onChange={props.handleChange}
					options={options}
				/>

			</div>
			<div className='catalog_list'>
				{
					props.currentFoods.map((food: IFood) => {
						return <BestSellersItem food={food} key={uid(food)} />
					})
				}
			</div>
			<div className='paginator_pages'>

				{ renderPageNumbers }

			</div>
		</div>
	)
}

export default CatalogWrapper
