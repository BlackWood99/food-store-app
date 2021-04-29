import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { IFood } from "../../../interfaces"
import { addCartItem } from "../../../redux/actions"

interface ICounterProps {
    foodItem: IFood
}

export const Counter = (props: ICounterProps) => {

    const [counter, setCounter] = useState(1)

    const onCounterMinus = () => {
        if (counter === 1) setCounter(1) 
        else setCounter(prev => prev - 1)
    }

    const onCounterPlus = () => {
        if (counter === 10) setCounter(10) 
        else setCounter(prev => prev + 1)
    }

    const dispatch = useDispatch()

    const onAddCartItem = () => {
        const cartItem = {
            id: Date.now(),
            count: counter,
            sum: props.foodItem.price * counter,
            foodItem: props.foodItem
        }
        
        dispatch(addCartItem(cartItem))

        setCounter(1)
    }

	return (
		<div className='buyBlock'>
			<div className='buyBlock_left'>
				<button className='btn btn-operator minus' onClick={onCounterMinus}>-</button>
				<input className='count' type='text' value={counter} readOnly />
				<button className='btn btn-operator plus' onClick={onCounterPlus}>+</button>
			</div>
			<div className='buyBlock_right'>
				<button className='btn btn-cart foodItem material-icons' onClick={onAddCartItem}>
					shopping_cart
				</button>
                <button className='btn btn-cart foodpage_counter' onClick={onAddCartItem}>
                    <span className='material-icons'>shopping_cart</span>
                    <span>Купить</span>
                </button>
			</div>
		</div>
	)
}
