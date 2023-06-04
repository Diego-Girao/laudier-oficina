import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const instagram =
	"https://instagram.com/laudierjr.mecautomotiva?igshid=YmMyMTA2M2Y="
const whatsapp = "https://api.whatsapp.com/send?phone=5521969617501"

export default function Contact() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])
	return (
		<>
			<div
				className="hero min-h-screen -mt-2"
				style={{
					backgroundImage: `url("https://plus.unsplash.com/premium_photo-1658527057580-f473648a16d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW5naW5lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<section className="hero-content -mt-28 flex-col text-xl font-bold text-white md:flex-row md:text-3xl">
					<p
						data-aos={"fade-right"}
						data-aos-delay={"200"}
						data-aos-duration={"900"}
						data-aos-easing={"ease-in-out"}
					>
						Rua Professora Vicentina, Lt 5, Qd C, Coelho da Rocha - São João de
						Meriti - RJ Cep: 25550-650
					</p>
					<div
						data-aos={"flip-up"}
						data-aos-duration={"900"}
						data-aos-delay={"400"}
						data-aos-easing={"ease-in-out"}
						className="flex gap-16 -mb-2 md:gap-4 md:flex md:flex-col"
					>
						<a
							className="hover:opacity-100 duration-300 ease-in-out opacity-50"
							href={instagram}
							target="_blank"
						>
							Instagram
							<InstagramLogo
								className="bg-gradient-to-br from-purple-700 to-red-800 rounded-lg"
								weight="duotone"
							/>
						</a>
						<a
							className="hover:opacity-100 duration-300 ease-in-out opacity-50"
							href={whatsapp}
							target="_blank"
						>
							Whatsapp
							<WhatsappLogo
								className="bg-gradient-to-br from-green-500 to-green-700 rounded-full"
								weight="duotone"
							/>
						</a>
					</div>
					<iframe
						data-aos={"fade-left"}
						data-aos-easing={"ease-in-out"}
						data-aos-delay={"950"}
						data-aos-duration={"500"}
						className="rounded-2xl w-full h-80 mt-4 shadow-2xl shadow-black md:w-full md:max-h-full"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.577983122505!2d-43.38751492981251!3d-22.781037733691498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9965ef27f1f5e5%3A0xf0072f1afd4d4771!2sOFICINA%20MECANICA%20-%20LAUDIER%20JR%20REPARA%C3%87%C3%95ES%20AUTOMOTIVAS!5e0!3m2!1spt-BR!2spt!4v1683385943130!5m2!1spt-BR!2spt"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</section>
			</div>
		</>
	)
}
