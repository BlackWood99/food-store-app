import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { ICart } from "../../../interfaces"
import { changeCount, deleteCartItem } from "../../../redux/actions"

interface ICartProps {
	cartItem: ICart
}

export const Cart: React.FC<ICartProps> = ({ cartItem }) => {
	
    const [counter, setCounter] = useState(cartItem.count)
    const dispatch = useDispatch()

	const onCounterMinus = () => {
		if (counter === 1) setCounter(1)
		else {
            setCounter(counter - 1)

            const changedCartItem = {
                ...cartItem,
                count: counter - 1,
                sum: cartItem.foodItem.price * (counter - 1)
            }
    
            dispatch(changeCount(changedCartItem))
        }   
	}
	const onCounterPlus = () => {
		if (counter === 10) setCounter(10)
		else {
            setCounter((prev: number) => prev + 1)

            const changedCartItem = {
                ...cartItem,
                count: counter + 1,
                sum: cartItem.foodItem.price * (counter + 1)
            }
    
            dispatch(changeCount(changedCartItem))
        }
	}

    const onDeleteCartItem = () => {
        dispatch(deleteCartItem(cartItem))
    }

	return (
		<div className='cart_item'>
			
			<div className='img'>
				<img src={cartItem.foodItem.img} alt='food' />
			</div>
			<div className="cart_item_center">
				<div className='name'>
					<h3>{cartItem.foodItem.name}</h3>
				</div>
				<div className='price'>
					<h3>{cartItem.foodItem.price} руб</h3>
				</div>
				<div className='counter'>
					<button className='btn btn-operator minus' onClick={onCounterMinus}>
						-
					</button>
					<input
						className='count'
						type='text'
						value={counter}
						readOnly
					/>
					<button className='btn btn-operator plus' onClick={onCounterPlus}>
						+
					</button>
				</div>
				<div className='sum'>
					<h3>{cartItem.foodItem.price * counter} руб</h3>
				</div>
			</div>
			<div className='delete'>
				<button className='material-icons' onClick={onDeleteCartItem}>clear</button>
			</div>
		</div>
	)
}
