import { Link } from "react-router-dom"
import logo from "/src/assets/images/logo_oficina.png"

export default function Navbar() {
	return (
		<div className="navbar z-10 bg-black shadow-2xl shadow-black">
			<div className="flex-1">
				<a href="/">
					<img
						className="w-10/12 cursor-pointer lg:w-1/2 hover:animate-pulse"
						src={logo}
					/>
				</a>
			</div>
			<div className="flex">
				<ul className="p-1 hidden md:flex md:gap-6 md:text-xl md:flex-row">
					<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:bg-gray-700 hover:text-error hover:rounded-md hover:bg-opacity-30">
						<Link to="/about">Sobre</Link>
					</li>
					<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:bg-gray-700 hover:text-error hover:rounded-md hover:bg-opacity-30">
						<Link to="/repair">Serviços</Link>
					</li>
					<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:bg-gray-700 hover:text-error hover:rounded-md hover:bg-opacity-30">
						<Link to="/store">L&A Autopeças</Link>
					</li>
					<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:bg-gray-700 hover:text-error hover:rounded-md hover:bg-opacity-30">
						<Link to="/contact">Contato</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
