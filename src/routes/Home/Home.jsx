import { useEffect } from "react"

import imgBg from "/src/assets/images/owner.png"

import AOS from "aos"
import "aos/dist/aos.css"

export default function Hero() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])
	return (
		<div
			className="hero relative -z-10 place-items-start"
			style={{
				backgroundImage: `url("https://plus.unsplash.com/premium_photo-1658527057580-f473648a16d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW5naW5lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
			}}
		>
			<div className="hero-overlay bg-opacity-80"></div>
			<div
				data-aos={"fade-right"}
				data-aos-easing={"ease-in-sine"}
				data-aos-duration={"900"}
				className="-mb-14"
			>
				<figure>
					<img src={imgBg} alt="Dono da loja" />
				</figure>
			</div>
		</div>
	)
}
