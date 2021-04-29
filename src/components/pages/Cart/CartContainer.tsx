import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { uid } from "react-uid"
import { getCart } from "../../../redux/actions"
import { Cart } from "./Cart"

export const CartContainer = () => {
	const dispatch = useDispatch()
    
	React.useEffect(() => {
		dispatch(getCart())
	}, [])

	const cart = useSelector((state: any) => state.cartPage.cart)

    const [cartSum, setCartSum] = useState(0)

    useEffect(() => {
        const cartSumReduce = cart.reduce((a: any, b: any) => ({ sum: a.sum + b.sum }))
        setCartSum(cartSumReduce.sum)
    }, [cart])

	return (
		<div className="cart">
			<h2>Корзина</h2>
			<div className="cart_wrapper">
				{cart.map((cartItem: any) => {
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
