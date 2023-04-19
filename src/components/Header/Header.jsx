import React from "react"

export default function Header() {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Logo Oficina</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Sobre</a>
					</li>
					<li>
						<a>Serviços</a>
					</li>
					<li>
						<a>L&A Autopeças</a>
					</li>
					<li>
						<a>Contato</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
