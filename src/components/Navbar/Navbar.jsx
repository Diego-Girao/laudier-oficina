import { Link } from "react-router-dom"
import logo from "/src/assets/images/logo_oficina.svg"

export default function Navbar() {
	return (
		<div className="navbar z-10 bg-black shadow-lg shadow-yellow-600">
			<div className="flex-1">
				<a>
					<img
						className="w-1/3 cursor-pointer bg-white rounded-lg lg:w-1/12 hover:animate-pulse"
						src={logo}
					/>
				</a>
			</div>
			<div className="flex-none">
				<ul className="p-1 gap-2 lg:menu lg:menu-horizontal">
					<li className="hover:font-black">
						<Link to="/about">Sobre</Link>
					</li>
					<li className="hover:font-black">
						<Link to="/repair">Serviços</Link>
					</li>
					<li className="hover:font-black">
						<Link to="/store">L&A Autopeças</Link>
					</li>
					<li className="hover:font-black">
						<Link to="/contact">Contato</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
