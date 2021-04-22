import { NavLink } from "react-router-dom"

function FoodNavBar() {

	return (
		<nav className='foodNav'>
			<NavLink to={"/catalog/Гамбургеры"} className='link'>
				Гамбургеры
			</NavLink>
			<NavLink to={"/catalog/Сэндвичи"} className='link'>
				Сэндвичи
			</NavLink>
			<NavLink to={"/catalog/Печеньки"} className='link'>
				Печеньки
			</NavLink>
			<NavLink to={"/catalog/Пирожные"} className='link'>
				Пирожные
			</NavLink>
		</nav>
	)
}

export default FoodNavBar
