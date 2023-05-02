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
			className={`navbar md:justify-between z-10 bg-black shadow-2xl shadow-black ${
				menu == "close" ? "sticky duration-500 pb-[330px]" : "duration-500"
			}`}
		>
			<div className="flex justify-between items-center">
				<a href="/">
					<img
						className="w-10/12 cursor-pointer lg:w-1/2 hover:animate-pulse"
						src={logo}
					/>
				</a>
				<span
					className={`text-3xl cursor-pointer block text-white mx-2 md:hidden`}
				>
					<ion-icon
						name={menu == "menu" ? menu : "close"}
						onClick={handleMenu}
					></ion-icon>
				</span>
			</div>
			<div className="flex">
				<ul
					className={`p-1 md:flex md:gap-6 md:text-xl md:flex-row ${styleUl}`}
				>
					<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700">
						<Link to="/about">Sobre</Link>
					</li>
					<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700">
						<Link to="/repair">Serviços</Link>
					</li>
					<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700">
						<Link to="/store">L&A Autopeças</Link>
					</li>
					<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700">
						<Link to="/contact">Contato</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
// <div className="navbar z-10 bg-black shadow-2xl shadow-black">
// 	<div className="flex-1">
// 		<a href="/">
// 			<img
// 				className="w-10/12 cursor-pointer lg:w-1/2 hover:animate-pulse"
// 				src={logo}
// 			/>
// 		</a>
// 	</div>
// <div className="flex">
// 	<ul className="p-1 hidden md:flex md:gap-6 md:text-xl md:flex-row">
// 		<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:bg-gray-700 hover:text-error hover:rounded-md hover:bg-opacity-30">
// 			<Link to="/about">Sobre</Link>
// 		</li>
// 		<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:bg-gray-700 hover:text-error hover:rounded-md hover:bg-opacity-30">
// 			<Link to="/repair">Serviços</Link>
// 		</li>
// 		<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:bg-gray-700 hover:text-error hover:rounded-md hover:bg-opacity-30">
// 			<Link to="/store">L&A Autopeças</Link>
// 		</li>
// 		<li className="text-gray-700 font-bold p-3 active:translate-y-1 hover:ease-in-out hover:duration-150 hover:bg-gray-700 hover:text-error hover:rounded-md hover:bg-opacity-30">
// 			<Link to="/contact">Contato</Link>
// 		</li>
// 	</ul>
// </div>
// 		</div>
// 	)
// }
