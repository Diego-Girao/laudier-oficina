import { GearFine } from "@phosphor-icons/react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function About() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])
	return (
		<>
			<div
				className="hero min-h-screen -mt-2 relative -z-10"
				style={{
					backgroundImage: `url("https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdG9yJTIwZGUlMjBjYXJyb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
				}}
			>
				<div className="hero-overlay bg-opacity-80"></div>
				<div className="flex flex-col mt-8 w-11/12 text-justify md:justify-between lg:justify-around md:place-items-center  md:p-4 md:mt-8 lg:flex-row lg:flex-wrap md:w-full">
					{/* CARD 1 */}
					<div
						data-aos={"flip-left"}
						data-aos-duration={"800"}
						data-aos-easing={"ease-in-out"}
						className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96"
					>
						<figure>
							<img
								src="https://images.unsplash.com/photo-1599256630445-67b5772b1204?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG1lY2hhbmljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
								alt="Mural de ferramentas"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-4xl text-neutral-800 bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
								🤝️ Missão
							</h2>
							<p className="text-lg">
								A nossa missão é garantir a excelência em auto peças na
								comercialização e serviços para o cliente e especialistas em
								reparação automotiva potencializando valor e sustentabilidade do
								negócio.
							</p>
						</div>
					</div>
					{/* CARD 2 */}
					<div
						data-aos={"flip-left"}
						data-aos-duration={"800"}
						data-aos-delay={"300"}
						data-aos-easing={"ease-in-out"}
						className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96"
					>
						<figure>
							<img
								src="https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhciUyMHByb2JsZW1zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
								alt="Velocímetro de carro"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-4xl text-neutral-800  bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
								👀️ Visão
							</h2>
							<p className="text-lg">
								Visão da Laudier Jr Reparação Automotiva é, tornar-se uma
								empresa líder no mercado automotivo e no mercado de reposição da
								linha leve no Rio de Janeiro até 2024 e ser reconhecida pela
								excelência nos serviços oferecidos ao mercado. Essa visão será
								obtida nacionalmente até 2030.
							</p>
						</div>
					</div>
					{/* CARD 3 */}
					<div
						data-aos={"flip-left"}
						data-aos-duration={"800"}
						data-aos-delay={"600"}
						data-aos-easing={"ease-in-out"}
						className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96"
					>
						<figure>
							<img
								src="https://images.unsplash.com/photo-1597766353939-9d782bde7a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1vdG9yJTIwZGUlMjBjYXJyb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
								alt="Motor"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-4xl text-neutral-800  bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
								🎖️ Valores
							</h2>
							<ul>
								<li className="flex items-center mb-5 text-lg gap-1">
									<GearFine className="animate-spin" />
									Ética e transparência nos negócios.
								</li>
								<li className="flex items-center mb-5 text-lg gap-1">
									<GearFine className="animate-spin" />
									Busca por mudanças contínuas.
								</li>
								<li className="flex items-center mb-5 text-lg gap-1">
									<GearFine className="animate-spin" />
									Respeito por vendedores e clientes.
								</li>
								<li className="flex items-center text-lg gap-1">
									<GearFine className="animate-spin" />
									Excelência no atendimento e serviços.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
