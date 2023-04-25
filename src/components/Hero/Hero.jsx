import React from "react"

export default function Hero() {
	return (
		<div
			className="hero min-h-screen bg-gray-500"
			style={{ backgroundImage: `url("src/assets/images/tool.jpg")` }}
		>
			<div className="hero-content flex-col lg:flex-row">
				<img
					src="src/assets/images/WhatsApp Image 2023-04-15 at 19.55.17 (1).jpeg"
					className="max-w-[12rem] rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-5xl font-bold">
						Manutenção preventiva é aqui ! 👊
					</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	)
}

{
	/* <section className="justify-center text-white">
				<p className="text-5xl font-bold text-black">
					Manutenção preventiva é aqui ! 👊{" "}
				</p>
				<span className="text-3xl">
					Profissional qualificado, produtos de qualidade e com aquele precinho
					e condições facilitadas! Venham conferir!
				</span>
			</section> */
}
