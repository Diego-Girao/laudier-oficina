import { Link } from "react-router-dom"
import logo from "/src/assets/images/logo_oficina.png"
import AOS from "aos"
import "aos/dist/aos.css"

import { useState, useEffect } from "react"

export default function Navbar() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	const [menu, setMenu] = useState("menu")

	const styleUl = `md:flex md:mr-4 md:items-center z-[-1] md:z-auto md:static md:normal-case md:w-auto md:py-0
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
						data-aos={"fade-right"}
						data-aos-offset={"300"}
						data-aos-easing={"ease-in-sine"}
						data-aos-delay={"300"}
						className="flex cursor-pointer w-72 md:w-80 hover:animate-pulse"
						src={logo}
						alt="Logo oficina em forma de carro"
					/>
				</a>
				<span
					className={`flex text-3xl cursor-pointer ml-5 text-white md:hidden`}
				>
					<ion-icon
						name={menu == "menu" ? menu : "close"}
						onClick={handleMenu}
					></ion-icon>
				</span>
			</div>
			<div className="flex">
				<ul className={`md:flex md:gap-10 md:text-2xl md:flex-row ${styleUl}`}>
					<li
						data-aos={"fade-up-left"}
						data-aos-duration={"800"}
						data-aos-easing={"ease-in-out"}
						data-aos-delay={"400"}
						className="mb-10 text-2xl text-gray-700 font-bold hover:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700 md:mb-0"
					>
						<Link to="/about" onClick={() => setMenu("menu")}>
							Sobre
						</Link>
					</li>
					<li
						data-aos={"fade-up-left"}
						data-aos-duration={"800"}
						data-aos-easing={"ease-in-out"}
						data-aos-delay={"600"}
						className="mb-10 text-2xl text-gray-700 font-bold hover:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700 md:mb-0"
					>
						<Link to="/repair" onClick={() => setMenu("menu")}>
							Serviços
						</Link>
					</li>
					<li
						data-aos={"fade-up-left"}
						data-aos-duration={"800"}
						data-aos-easing={"ease-in-out"}
						data-aos-delay={"900"}
						className="mb-10 text-2xl md:text-center text-gray-700 font-bold hover:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700 md:mb-0"
					>
						<Link to="/store" onClick={() => setMenu("menu")}>
							L&A Autopeças
						</Link>
					</li>
					<li
						data-aos={"fade-up-left"}
						data-aos-duration={"1000"}
						data-aos-easing={"ease-in-out"}
						data-aos-delay={"1100"}
						className="text-2xl text-gray-700 font-bold hover:translate-y-1 hover:ease-in-out hover:duration-150 hover:text-red-700 md:mb-0"
					>
						<Link to="/contact" onClick={() => setMenu("menu")}>
							Contato
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
