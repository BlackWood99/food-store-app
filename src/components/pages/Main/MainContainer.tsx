//import React from 'react'
import { connect } from 'react-redux'
import { IFood, IReview, IStateConnect } from '../../../interfaces'
import Benefits from './Benefits/Benefits'
import BestSellers from './BestSellers/BestSellers'
import CallBackForm from './CallBackForm/CallBackForm'
import ImgaeText from './ImageText/ImgaeText'
import Reviews from './Reviews/Reviews'
import Slider from './Slider/Slider'
import SpecialCategory from './SpecialCategory/SpecialCategory'

interface IMainProps {
    food: [] | IFood[]
    reviews: [] | IReview[]
}

function MainContainer(props: IMainProps) {

    return (
        <main>
            <Slider />
            <Benefits />
            <BestSellers bestSellerFood={props.food}/>
            <SpecialCategory />
            <CallBackForm />
            <ImgaeText />
            <Reviews reviews={props.reviews} />
        </main>
    )
}

const mapStateToProps = (state: IStateConnect) => {
    return {
        food: state.foodPage.food,
        reviews: state.reviewsPage.reviews
    }
}

export default connect(mapStateToProps, null)(MainContainer)
