//import React from "react"
import { uid } from "react-uid"
import { IReview } from "../../../../interfaces"
import ReviewsItem from "./ReviewsItem"

interface IReviewsProps {
	reviews: [] | IReview[]
}

function Reviews(props: IReviewsProps) {

	const reviews = props.reviews.slice(0, 3)

	return (
		<div className='reviews'>
			<h2>Отзывы</h2>
			<div className='reviews_list'>
				{
					reviews.map((rev: IReview) => {
						return <ReviewsItem rev={rev} key={uid(rev)}/>
					})
				}
				
			</div>
		</div>
	)
}

export default Reviews
