import "./scss/App.scss"
import Header from "./components/Header/Header"
import FoodNavBar from "./components/FoodNavbar/FoodNavBar"
import { Route, Switch } from "react-router-dom"
import MainContainer from "./components/pages/Main/MainContainer"
import Footer from "./components/Footer/Footer"
import CatalogContainer from "./components/pages/Catalog/CatalogContainer"
import FoodPageContainer from "./components/pages/FoodPage/FoodPageContainer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getFood, getReviews, getCart } from "./redux/actions"
import { Preloader } from "./components/utils/Preloader/Preloader"
import { CartContainer } from "./components/pages/Cart/CartContainer"
import { About } from "./components/pages/About/About"
import { Contacts } from "./components/pages/Contacts/Contacts"
import { Delivery } from "./components/pages/Delivery/Delivery"
import { Payment } from "./components/pages/Payment/Payment"

interface IRootState {
	appPage: {
		loading: boolean
	}
}

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getFood())
		dispatch(getReviews())
		dispatch(getCart())
	}, [dispatch])

	const loading = useSelector<IRootState, boolean>(
		(state) => state.appPage.loading
	)

	if (loading) return <Preloader />

	return (
		<div className="App">
			<main className="content-wrapper">
				<div className="container">
					<div className="content">
						<Header />
						<FoodNavBar />
	
						<Switch>
							<Route path='/' component={MainContainer} exact />
							<Route
								path={`/catalog/:type`}
								component={CatalogContainer}
								exact
							/>
							<Route path='/food/:id' component={FoodPageContainer} exact />
							<Route path='/basket' component={CartContainer} exact />
							<Route path='/about' component={About} exact />
							<Route path='/contacts' component={Contacts} exact />
							<Route path='/delivery' component={Delivery} exact />
							<Route path='/payment' component={Payment} exact />
						</Switch>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}

export default App
