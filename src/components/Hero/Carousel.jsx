import { useState } from "react"

const Carousel = ({ images }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === images.length - 1 ? 0 : prevSlide + 1
		)
	}

	const prevSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? images.length - 1 : prevSlide - 1
		)
	}

	return (
		<div className="relative">
			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-300"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{images.map((image, index) => (
						<div
							key={index}
							className={`w-full`}
							style={{
								position: "relative",
								display: index === currentSlide ? "block" : "none",
							}}
						>
							<img src={image.src} alt={image.alt} className="w-full h-auto" />
							<div
								className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 px-4"
								style={{ width: "100%", textAlign: "center" }}
							>
								{image.text}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="absolute bottom-0 left-0 w-full flex justify-center mt-2">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`h-2 w-2 rounded-full mx-1 transition-colors duration-300 ${
							index === currentSlide ? "bg-gray-800" : "bg-gray-400"
						}`}
					/>
				))}
			</div>

			<button
				className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-900"
				onClick={prevSlide}
			>
				&lt;
			</button>
			<button
				className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-900"
				onClick={nextSlide}
			>
				&gt;
			</button>
		</div>
	)
}

export default Carousel
