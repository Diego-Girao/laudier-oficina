import { Link } from "react-router-dom"
import logo from "/src/assets/images/logo_oficina.png"

import { useState } from "react"

export default function Navbar() {
	const [menu, setMenu] = useState("menu")

	const styleUl = `md:flex md:items-center z-[-1] md:z-auto md:static md:normal-case md:w-auto md:py-0
                    absolute w-full left-0 uppercase py-4 md:pl-0 pl-7 
                    ${
											menu == "close"
												? "transition-all ease-in-out duration-500 top-[140px] opacity-100"
												: "top-[-400px]"
										}`

	const handleMenu = () => {
		menu == "menu" ? setMenu("close") : setMenu("menu")
	}
	return (
		<nav
			className={`navbar sticky inset-0 justify-center md:justify-between z-10 bg-black shadow-2xl shadow-black ${
				menu == "close" ? "sticky duration-500 pb-[330px]" : "duration-500"
			}`}
		>
			<div className="flex justify-between items-center">
				<a href="/">
					<img
						className="flex cursor-pointer w-64 md:w-80 hover:animate-pulse"
						src={logo}
					/>
				</a>
				<span
					className={`flex text-3xl cursor-pointer text-white mx-2 md:hidden`}
				>
					<ion-icon
						name={menu == "menu" ? menu : "close"}
						onClick={handleMenu}
					></ion-icon>
				</span>
			</div>
			<div className="flex">
				<ul className={`md:flex md:gap-10 md:text-2xl md:flex-row ${styleUl}`}>
					<li className="text-gray-700 font-bold hover:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700">
						<Link to="/about" onClick={() => setMenu("menu")}>
							Sobre
						</Link>
					</li>
					<li className="text-gray-700 font-bold hover:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700">
						<Link to="/repair" onClick={() => setMenu("menu")}>
							Serviços
						</Link>
					</li>
					<li className="text-gray-700 font-bold hover:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700">
						<Link to="/store" onClick={() => setMenu("menu")}>
							L&A Autopeças
						</Link>
					</li>
					<li className="text-gray-700 font-bold hover:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700">
						<Link to="/contact" onClick={() => setMenu("menu")}>
							Contato
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
