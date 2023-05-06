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
				<div className="hero-content text-left text-neutral-content">
					<div className="max-w-md">
						<section className="text-xl font-bold mb-4 text-white md:text-3xl">
							<p>
								Rua Professora Vicentina, Lt 5, Qd C, Coelho da Rocha - São João
								de Meriti - RJ <p>Cep: 25550-650</p>
								<iframe
									className="rounded-2xl w-full h-80 mt-4 shadow-2xl shadow-black md:w-full md:max-h-full"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.577983122505!2d-43.38751492981251!3d-22.781037733691498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9965ef27f1f5e5%3A0xf0072f1afd4d4771!2sOFICINA%20MECANICA%20-%20LAUDIER%20JR%20REPARA%C3%87%C3%95ES%20AUTOMOTIVAS!5e0!3m2!1spt-BR!2spt!4v1683385943130!5m2!1spt-BR!2spt"
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"
								></iframe>
							</p>
						</section>
						<h1 className="mb-5 text-2xl font-bold text-white">
							Sigam nossas redes sociais
						</h1>
						<a href={instagram} target="_blank">
							<svg
								className="fill-current bg-gray-100 bg-opacity-25 rounded-full opacity-30 w-5 md:w-6 active:translate-y-1 hover:bg-black hover:fill-slate-600 hover:opacity-100"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
							>
								<path
									d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
									opacity="0.2"
								></path>
								<path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
							</svg>
						</a>
						<a href={whatsapp} target="_blank">
							<svg
								className="fill-current opacity-25 w-5 md:w-6 active:translate-y-1 hover:fill-white hover:opacity-100"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
							>
								<path d="M224,56l-96,88L32,56Z" opacity="0.2"></path>
								<path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
