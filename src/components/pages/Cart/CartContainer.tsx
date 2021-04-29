import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { uid } from "react-uid"
import { ICart, ICartStateConnect } from "../../../interfaces"
import { getCart } from "../../../redux/actions"
import { Cart } from "./Cart"

export const CartContainer = () => {

	const dispatch = useDispatch()
    
	React.useEffect(() => {
		dispatch(getCart())
	}, [dispatch])

	const cart = useSelector((state: ICartStateConnect) => state.cartPage.cart)

    const [cartSum, setCartSum] = useState(0)

    useEffect(() => {
		if (cart.length) {
			const cartSumReduce = cart.reduce((a: ICart, b: ICart): any => ({ sum: a.sum + b.sum }))
			setCartSum(cartSumReduce.sum)
		}
    }, [cart])

	return (
		<div className="cart">
			<h2>Корзина</h2>
			<div className="cart_wrapper">
				{cart.map((cartItem: ICart) => {
					return <Cart cartItem={cartItem} key={uid(cartItem)} />
				})}
			</div>
			<div className="cart_sum">
                <div>
                    <h4 className="title">Итого: </h4>
    				<h3 className="sum">{cartSum} руб</h3>
                </div>
			</div>
		</div>
	)
}
