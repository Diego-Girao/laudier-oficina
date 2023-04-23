import React from "react"
import logo from "/src/assets/images/logo_oficina.svg"

export default function Header() {
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
						<a>Sobre</a>
					</li>
					<li className="hover:font-black">
						<a>Serviços</a>
					</li>
					<li className="hover-bordered">
						<a>L&A Autopeças</a>
					</li>
					<li className="hover-bordered">
						<a>Contato</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
