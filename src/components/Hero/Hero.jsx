export default function Hero() {
	return (
		<>
			<div className="carousel w-full md:w-full">
				<div id="item1" className="carousel-item w-full">
					<img src="src/assets/images/tool.jpg" className="w-full" />
				</div>
				<div id="item2" className="carousel-item w-full">
					<img src="src/assets/images/tool.jpg" className="w-full" />
				</div>
				<div id="item3" className="carousel-item w-full">
					<img src="src/assets/images/tool.jpg" className="w-full" />
				</div>
				<div id="item4" className="carousel-item w-full">
					<img src="src/assets/images/tool.jpg" className="w-full" />
				</div>
			</div>
			<div className="flex justify-center w-full py-2 gap-2">
				<a href="#item1" className="btn btn-circle btn-sm">
					1
				</a>
				<a href="#item2" className="btn  btn-circle btn-sm">
					2
				</a>
				<a href="#item3" className="btn  btn-circle btn-sm">
					3
				</a>
				<a href="#item4" className="btn  btn-circle btn-sm">
					4
				</a>
			</div>
		</>
	)
}
