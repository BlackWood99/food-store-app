import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

function Header() {
	const cart = useSelector((state: any) => state.cartPage.cart)

	return (
		<header className="header">
			<div className="header_logo">
				<NavLink to='/'>Монпансье</NavLink>
			</div>
			<div className="header_right">
				<nav className="header_nav">
				    <NavLink to="/catalog/Каталог" className="header_nav__link">Каталог</NavLink>
					<NavLink to="/about" className="header_nav__link">О компании</NavLink>
					<NavLink to="/contacts" className="header_nav__link">Контакты</NavLink>
					<NavLink to="/delivery" className="header_nav__link">Доставка</NavLink>
					<NavLink to="/payment" className="header_nav__link">Оплата</NavLink>
				</nav>
	            <div className="header_contacts">
	                <h4>+7(999)123-45-67</h4>
	                <h4>qwerty@mail.ru</h4>
	            </div>
	            <div className="header_cart">
					<NavLink to="/cart"><i className="material-icons">shopping_cart</i></NavLink>
					<span className="cart_length">{cart.length}</span>
				</div>
			</div>
		</header>
	)
}

export default Header
