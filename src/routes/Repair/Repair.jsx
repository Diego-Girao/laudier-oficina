import thumb1 from "/src/assets/images/tool_thumb1.jpg"
import thumb2 from "/src/assets/images/tool_thumb2.jpg"

export default function Repair() {
	return (
		<>
			<div className="carousel w-full">
				<div id="item1" className="carousel-item w-full items-center">
					<img src={thumb1} className="w-full relative" />
					<p className="text-white text-base font-bold absolute bg-black bg-opacity-75 mx-4 md:text-2xl lg:p-16 xl:p-28">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
						nemo temporibus quas expedita minima ipsa est voluptate ratione
						laudantium nostrum reprehenderit nihil enim magni reiciendis,
						delectus tempora porro neque iure?
					</p>
				</div>
				<div id="item2" className="carousel-item w-full">
					<img src={thumb2} className="w-full relative" />
				</div>
				<div id="item3" className="carousel-item w-full">
					<img
						src="src/assets/images/tool_thumb3.jpg"
						className="w-full relative"
					/>
				</div>
				<div id="item4" className="carousel-item w-full">
					<img
						src="src/assets/images/tool_thumb4.jpg"
						className="w-full relative"
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
			{/* <a href="#item3" className="btn btn-xs">
					3
				</a>
				<a href="#item4" className="btn btn-xs">
					4
				</a> */}

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
