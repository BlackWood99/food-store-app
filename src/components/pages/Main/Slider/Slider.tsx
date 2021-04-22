// import React from 'react'
import MySlider from '@farbenmeer/react-spring-slider'

function Slider() {
    
    return (
        <div className="slider">
            <MySlider 
                auto={3500}
            >
                <div className="slider_item">
                    <div className="slider_item__text">
                        <h3>Выгодные акции и бонусы</h3>
                    </div>
                </div>
                <div className="slider_item slide2">
                    <div className="slider_item__text">
                        <h3>Быстрая доставка до двери</h3>
                    </div>
                </div>
                <div className="slider_item slide3">
                    <div className="slider_item__text">
                        <h3>Гарантии качества продукции</h3>
                    </div>
                </div>
            </MySlider>
        </div>
    )
}

export default Slider
