import { Link } from "react-router-dom"
import logo from "/src/assets/images/logo_oficina.svg"

export default function Navbar() {
	return (
		<div className="navbar bg-base-100 fixed shadow-md">
			<div className="flex-1">
				<a>
					<img className="w-1/5 cursor-pointer hover:animate-spin" src={logo} />
				</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-vertical lg:menu-horizontal px-1">
					<li className="hover-bordered">
						<Link to="/about">Sobre</Link>
					</li>
					<li className="hover:font-black">
						<Link to="/repair">Serviços</Link>
					</li>
					<li className="hover-bordered">
						<Link to="/store">L&A Autopeças</Link>
					</li>
					<li className="hover-bordered">
						<Link to="/contact">Contato</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
