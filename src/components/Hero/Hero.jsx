export default function Hero() {
	return (
		<>
			<div
				className="hero min-h-screen -mt-2 relative -z-10"
				style={{
					backgroundImage: `url("src/assets/images/teste.jpg")`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>

			{/* <div className="card lg:card-side lg:w-fit lg:mt-3 bg-slate-500 shadow-xl shadow-gray-900">
				<figure>
					<img
						src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
						alt="Tools"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">New album is released!</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
				</div>
			</div>
			<div className="card lg:card-side lg:w-fit lg:mt-3 bg-slate-500 shadow-xl shadow-gray-900">
				<figure>
					<img
						src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
						alt="Tools"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">New album is released!</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
				</div>
			</div> */}
		</>
		// <>
		// 	<div className="carousel z-0 w-full">
		// 		<div id="item1" className="carousel-item w-full">
		// 			<img src="src/assets/images/teste.jpg" className="w-full" />
		// 		</div>
		// 		<div id="item2" className="carousel-item w-full">
		// 			<img src="src/assets/images/teste.jpg" className="w-full" />
		// 		</div>
		// 		<div id="item3" className="carousel-item w-full">
		// 			<img src="src/assets/images/teste.jpg" className="w-full" />
		// 		</div>
		// 		<div id="item4" className="carousel-item w-full">
		// 			<img src="src/assets/images/teste.jpg" className="w-full" />
		// 		</div>
		// 	</div>
		// 	<div className="flex justify-center w-full py-2 gap-2">
		// 		<a href="#item1" className="btn btn-outline btn-xs">
		// 			1
		// 		</a>
		// 		<a href="#item2" className="btn btn-outline btn-xs">
		// 			2
		// 		</a>
		// 		<a href="#item3" className="btn  btn-outline btn-xs">
		// 			3
		// 		</a>
		// 		<a href="#item4" className="btn  btn-outline btn-xs">
		// 			4
		// 		</a>
		// 	</div>
		// </>
	)
}
