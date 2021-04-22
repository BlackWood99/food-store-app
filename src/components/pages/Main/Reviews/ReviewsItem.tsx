import React from "react"
import { IReview } from "../../../../interfaces"

interface IReviewsItemProps {
	rev: IReview
}

function ReviewsItem(props: IReviewsItemProps) {
	return (
		<div className='reviews_list_item'>
			<img
				src={props.rev.photo}
				alt='person'
			/>
			<div>
				<h3>{props.rev.user}</h3>
				<p>
					{props.rev.text}
				</p>
			</div>
		</div>
	)
}

export default ReviewsItem
