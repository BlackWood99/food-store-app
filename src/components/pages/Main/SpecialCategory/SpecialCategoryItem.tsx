import React from 'react'
import { NavLink } from 'react-router-dom'

function SpecialCategoryItem() {
    return (
        <div className="specialCategory_item">
            <NavLink to='/'>
                <div className="img">
                    <img src="https://static-sl.insales.ru/images/products/1/444/86016444/large__0001_item13.jpg" alt="burger"/>
                </div>
            </NavLink>
            <NavLink to='/' className='title'>Гамбургеры</NavLink>
        </div>
    )
}

export default SpecialCategoryItem
