import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react"

const instagram =
	"https://instagram.com/laudierjr.mecautomotiva?igshid=YmMyMTA2M2Y="
const whatsapp = "https://api.whatsapp.com/send?phone=5521969617501"

export default function Contact() {
	return (
		<>
			<div
				className="hero min-h-screen -mt-2 relative -z-10"
				style={{
					backgroundImage: `url("https://plus.unsplash.com/premium_photo-1658527057580-f473648a16d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW5naW5lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<section className="hero-content text-xl font-bold text-white md:text-3xl">
					<p>
						Rua Professora Vicentina, Lt 5, Qd C, Coelho da Rocha - São João de
						Meriti - RJ <p>Cep: 25550-650</p>
						<h1 className="mb-5 text-2xl font-bold text-white">
							Sigam nossas redes sociais
						</h1>
						<a href={instagram} target="_blank">
							<InstagramLogo weight="duotone" />
						</a>
						<a href={whatsapp} target="_blank">
							<WhatsappLogo weight="duotone" />
						</a>
						<iframe
							className="rounded-2xl w-full h-80 mt-4 shadow-2xl shadow-black md:w-full md:max-h-full"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.577983122505!2d-43.38751492981251!3d-22.781037733691498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9965ef27f1f5e5%3A0xf0072f1afd4d4771!2sOFICINA%20MECANICA%20-%20LAUDIER%20JR%20REPARA%C3%87%C3%95ES%20AUTOMOTIVAS!5e0!3m2!1spt-BR!2spt!4v1683385943130!5m2!1spt-BR!2spt"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</p>
				</section>
			</div>
		</>
	)
}
