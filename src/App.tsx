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
import { getFood, getReviews } from "./redux/actions"
import { Preloader } from "./components/utils/Preloader/Preloader"

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
	}, [])

	const loading = useSelector<IRootState, boolean>(
		(state) => state.appPage.loading
	)

	if (loading) return <Preloader />

	return (
		<div className='App'>
			<main className='content'>
				<div className='container'>
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
					</Switch>
				</div>
			</main>

			<Footer />
		</div>
	)
}

export default App
