export default function Repair() {
	return (
		<>
			<div className="carousel w-full">
				<div id="item1" className="carousel-item w-full">
					<img src="src/assets/images/tool.jpg" className="w-full" />
				</div>
				<div id="item2" className="carousel-item w-full">
					<img
						src="src/assets/images/WhatsApp Image 2023-04-15 at 19.55.16 (1).jpeg"
						className="w-full"
					/>
				</div>
				<div id="item3" className="carousel-item w-full">
					<img src="src/assets/images/tool.jpg" className="w-full" />
				</div>
				<div id="item4" className="carousel-item w-full">
					<img
						src="src/assets/images/WhatsApp Image 2023-04-15 at 19.55.16 (1).jpeg"
						className="w-full"
					/>
				</div>
			</div>
			<div className="flex justify-center w-full py-2 gap-2">
				<a href="#item1" className="btn btn-xs">
					1
				</a>
				<a href="#item2" className="btn btn-xs">
					2
				</a>
				<a href="#item3" className="btn btn-xs">
					3
				</a>
				<a href="#item4" className="btn btn-xs">
					4
				</a>
			</div>

			{/* <h1>Manutenção preventiva é aqui ! 👊</h1> */}
			{/* 
			<p>
			Funcionamento: Segunda à Sábado de 8h às 18h. Domingos e Feriados de 8h
			às 12h. Profissional qualificado, produtos de qualidade e com aquele
			precinho e condições facilitadas! Venham conferir!
		</p> */}
		</>
	)
}
