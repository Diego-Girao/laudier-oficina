import { useEffect } from "react"

import imgOwnerStore from "/src/assets/images/owner_store.png"

import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])
	return (
		<div
			className="hero min-h-screen -mt-2 relative -z-10"
			style={{
				backgroundImage: `url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
			}}
		>
			<div className="hero-overlay bg-opacity-80"></div>
			<div className="card mt-8 justify-center md:mt-8 lg:w-full">
				{/* CARD 1 */}
				<div
					data-aos={"flip-left"}
					data-aos-duration={"800"}
					data-aos-easing={"ease-in-out"}
					className="mb-8 bg-black bg-opacity-40 shadow-lg shadow-black"
				>
					<figure>
						<img src={imgOwnerStore} alt="Mural de ferramentas" />
					</figure>
				</div>
			</div>
		</div>
	)
}
