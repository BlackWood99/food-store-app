import { NavLink } from "react-router-dom"

function SpecialCategory() {
	return (
		<div className='specialCategory'>
			{/* <SpecialCategoryItem /> */}
			<div className='specialCategory_item'>
				<NavLink to={"/catalog/Гамбургеры"} className='link'>
					<div className='img'>
						<img
							src='https://static-sl.insales.ru/images/products/1/444/86016444/large__0001_item13.jpg'
							alt='burger'
						/>
					</div>
				</NavLink>
				<NavLink to='/catalog/Гамбургеры' className='title'>
					Гамбургеры
				</NavLink>
			</div>
			<div className='specialCategory_item'>
				<NavLink to={"/catalog/Сэндвичи"} className='link'>
					<div className='img'>
						<img
							src='https://static-sl.insales.ru/images/collections/1/5933/1464109/large_хот-дог.jpg'
							alt='burger'
						/>
					</div>
				</NavLink>
				<NavLink to='/catalog/Сэндвичи' className='title'>
					Сэндвичи
				</NavLink>
			</div>
			<div className='specialCategory_item'>
				<NavLink to={"/catalog/Печеньки"} className='link'>
					<div className='img'>
						<img
							src='https://static-sl.insales.ru/images/collections/1/5935/1464111/large_начос_с_острым_сырным_соусом.jpg'
							alt='burger'
						/>
					</div>
				</NavLink>
				<NavLink to="/catalog/Печеньки" className='title'>
					Печеньки
				</NavLink>
			</div>
			<div className='specialCategory_item'>
				<NavLink to={"/catalog/Пирожные"} className='link'>
					<div className='img'>
						<img
							src='https://static-sl.insales.ru/images/collections/1/7443/1482003/large_wwalls.ru-75848.jpg'
							alt='burger'
						/>
					</div>
				</NavLink>
				<NavLink to='/catalog/Пирожные' className='title'>
					Пирожные
				</NavLink>
			</div>
		</div>
	)
}

export default SpecialCategory
