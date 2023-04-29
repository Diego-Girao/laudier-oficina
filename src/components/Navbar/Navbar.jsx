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
			<div className="flex-none">
				<ul className="p-1 gap-2 menu lg:menu-horizontal lg:text-2xl">
					<li className="text-gray-700 font-bold hover:text-red-700 hover:font-bold hover-bordered">
						<Link to="/about">Sobre</Link>
					</li>
					<li className="text-gray-700 font-bold hover:text-red-700 hover:font-bold hover-bordered">
						<Link to="/repair">Serviços</Link>
					</li>
					<li className="text-gray-700 font-bold hover:text-red-700 hover:font-bold hover-bordered">
						<Link to="/store">L&A Autopeças</Link>
					</li>
					<li className="text-gray-700 font-bold hover:text-red-700 hover:font-bold hover-bordered">
						<Link to="/contact">Contato</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
