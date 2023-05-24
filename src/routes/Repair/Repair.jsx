import thumb1 from "/src/assets/images/tool_thumb1.jpg"
import thumb2 from "/src/assets/images/tool_thumb2.jpg"
import thumb3 from "/src/assets/images/tool_thumb3.jpg"
import thumb4 from "/src/assets/images/tool_thumb4.jpg"

export default function Repair() {
	return (
		<>
			<div className="carousel w-full">
				<div id="item1" className="carousel-item w-full items-center">
					<img src={thumb1} className="w-full relative" />
					<p className="text-white text-base font-bold absolute bg-black bg-opacity-75 text-justify mx-4 rounded-xl md:text-lg lg:p-4 lg:text-3xl">
						<mark>Troca de Óleo e do Motor</mark>
						<br />A troca de óleo e do motor é uma parte crucial da manutenção
						do seu carro. O óleo lubrificante desempenha um papel fundamental no
						bom funcionamento do motor, reduzindo o atrito e o desgaste das
						peças internas. Com o tempo, o óleo fica contaminado por resíduos e
						perde suas propriedades, o que pode comprometer a eficiência e a
						durabilidade do motor. Por isso, é recomendado seguir as orientações
						do fabricante e realizar a troca de óleo nos intervalos
						recomendados, utilizando o tipo adequado para o seu veículo. Além
						disso, é importante verificar regularmente o nível de óleo e estar
						atento a vazamentos. Mantenha o motor do seu carro saudável e
						prolongue sua vida útil por meio da troca de óleo regular e do
						cuidado adequado.
					</p>
				</div>
				<div id="item2" className="carousel-item w-full">
					<img src={thumb2} className="w-full relative" />
				</div>
				<div id="item3" className="carousel-item w-full">
					<img src={thumb3} className="w-full relative" />
				</div>
				<div id="item4" className="carousel-item w-full">
					<img src={thumb4} className="w-full relative" />
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
