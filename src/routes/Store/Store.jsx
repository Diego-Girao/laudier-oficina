import { GearFine } from "@phosphor-icons/react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import imgBg from "/src/assets/images/LeA-bg.png"

export default function Store() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])
	return (
		<div
			className="hero min-h-screen -mt-2 relative -z-10"
			style={{
				backgroundImage: `url("https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
			}}
		>
			<div className="hero-overlay bg-opacity-80"></div>
			<div className="flex flex-col mt-8 w-11/12 text-justify md:justify-center md:p-4 lg:flex-row lg:w-2/3">
				{/* CARD 1 */}
				<div
					data-aos={"zoom-in"}
					data-aos-duration={"1200"}
					data-aos-easing={"ease-in-out"}
					className="card card-bordered md:card-side mb-14 bg-base-100 shadow-lg shadow-black md:card-bordered"
				>
					<figure>
						<img src={imgBg} alt="Flyer L&A Autopeças" />
					</figure>
					<div className="card-body bg-gray-100 rounded-xl">
						<h2 className="card-title p-2 text-lg text-neutral-800 xl:text-2xl bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
							<GearFine className="animate-spin" />
							Manutenção preventiva é aqui !
						</h2>
						<p className="text-2xl font-bold">
							Profissional qualificado, produtos de qualidade e com aquele
							precinho e condições facilitadas! Venham conferir!
							<ul className="mt-8">
								<p>Funcionamento:</p>
								<li>Segunda à Sábado de 8h às 18h.</li>
								<li>Domingos e Feriados de 8h às 12h.</li>
							</ul>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
