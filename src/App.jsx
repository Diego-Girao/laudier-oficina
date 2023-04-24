import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"

function App() {
	return (
		<div>
			<Navbar />
			<Header />
			<Hero />
			<Outlet />
			<Footer />
		</div>
	)
}

export default App
