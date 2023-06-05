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
				backgroundImage: `url("https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdG9yJTIwZGUlMjBjYXJyb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="flex flex-col mt-8 w-11/12 text-justify md:justify-between md:p-4 md:mt-8 lg:flex-row md:w-full">
				{/* CARD 1 */}
				<div
					data-aos={"flip-left"}
					data-aos-duration={"800"}
					data-aos-easing={"ease-in-out"}
					className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96"
				>
					<figure>
						<img src={imgBg} alt="Flyer L&A Autopeças" />
					</figure>
					<div className="card-body">
						<h2 className="card-title p-2 text-2xl bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
							👊 Manutenção preventiva é aqui !
						</h2>
						<p className="text-lg">
							Funcionamento: Segunda à Sábado de 8h às 18h. Domingos e Feriados
							de 8h às 12h. Profissional qualificado, produtos de qualidade e
							com aquele precinho e condições facilitadas! Venham conferir!s
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
