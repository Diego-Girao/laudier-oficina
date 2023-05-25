import { GearFine } from "@phosphor-icons/react"

export default function About() {
	return (
		<>
			<div
				className="hero min-h-screen -mt-2 relative -z-10"
				style={{
					backgroundImage: `url("https://images.unsplash.com/photo-1584741621183-bb35de119593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80")`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="flex flex-col mt-8 w-11/12 text-justify md:justify-between md:p-4 md:mt-8 lg:flex-row md:w-full">
					{/* CARD 1 */}
					<div className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96">
						<figure>
							<img
								src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
								alt="Pessoa trocando o oleo do motor de um carro"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-xl bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
								<GearFine className="animate-spin" />
								Troca de Óleo e do Motor
							</h2>
							<p className="text-lg">
								A troca de óleo e do motor é uma parte crucial da manutenção do
								seu carro. O óleo lubrificante desempenha um papel fundamental
								no bom funcionamento do motor, reduzindo o atrito e o desgaste
								das peças internas. Com o tempo, o óleo fica contaminado por
								resíduos e perde suas propriedades, o que pode comprometer a
								eficiência e a durabilidade do motor. Por isso, é recomendado
								seguir as orientações do fabricante e realizar a troca de óleo
								nos intervalos recomendados, utilizando o tipo adequado para o
								seu veículo. Além disso, é importante verificar regularmente o
								nível de óleo e estar atento a vazamentos. Mantenha o motor do
								seu carro saudável e prolongue sua vida útil por meio da troca
								de óleo regular e do cuidado adequado.
							</p>
						</div>
					</div>
					{/* CARD 2 */}
					<div className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96">
						<figure>
							<img
								src="https://plus.unsplash.com/premium_photo-1674375344746-2f27c4720440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
								alt="Homem embaixo do carro suspenso em um elevador de carros com uma lanterna acesa"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-xl bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
								<GearFine className="animate-spin" /> Manutenção Preventiva do
								Carro
							</h2>
							<p className="text-lg">
								A manutenção preventiva é essencial para garantir o bom
								funcionamento e prolongar a vida útil do seu veículo. Esse
								serviço consiste na realização de inspeções periódicas e na
								execução de tarefas preventivas, como troca de fluidos,
								verificação de componentes vitais e ajustes necessários. Com a
								manutenção preventiva adequada, é possível identificar e
								corrigir problemas antes que eles se tornem mais graves,
								evitando assim custos elevados de reparo. Além disso, essa
								prática contribui para a segurança e confiabilidade do carro,
								reduzindo o risco de falhas mecânicas e acidentes. Agende
								regularmente a manutenção preventiva do seu veículo e garanta
								tranquilidade ao dirigir.
							</p>
						</div>
					</div>
					{/* CARD 3 */}
					<div className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96">
						<figure>
							<img
								src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
								alt="Disco e pinça de freio"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-xl bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
								<GearFine className="animate-spin" /> Manutenção dos Freios
							</h2>
							<p className="text-lg">
								A manutenção adequada do sistema de freios é essencial para
								garantir a sua segurança e a de todos os ocupantes do veículo.
								Os freios desempenham um papel fundamental no controle e na
								parada do carro, por isso é importante estar atento a sinais de
								desgaste e falhas. Verifique regularmente o estado das
								pastilhas, discos, tambores e fluido de freio. Caso perceba
								ruídos, vibrações ou diminuição na eficiência de frenagem, é
								fundamental agendar uma revisão imediata. Os freios devem ser
								inspecionados e, se necessário, reparados ou substituídos por
								profissionais qualificados. Não negligencie a manutenção dos
								freios, pois isso pode comprometer sua segurança e a de outros
								motoristas. Invista na manutenção preventiva dos freios e
								desfrute de viagens tranquilas e seguras.
							</p>
						</div>
					</div>
					{/* CARD 4 */}
					<div className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96">
						<figure>
							<img
								src="https://images.unsplash.com/photo-1633281256183-c0f106f70d76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
								alt="Motor do carro vista frontal das correias"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-xl bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
								<GearFine className="animate-spin" /> Reparo e Troca de Peças
							</h2>
							<p className="text-lg">
								Eventualmente, seu carro pode precisar de reparos e substituição
								de peças para garantir seu funcionamento seguro e eficiente.
								Quando detectar qualquer problema mecânico, é importante buscar
								um profissional qualificado para avaliar e solucionar a questão.
								Os reparos podem abranger uma ampla gama de componentes, desde o
								sistema de suspensão e direção até a transmissão e o sistema de
								arrefecimento. É fundamental utilizar peças de qualidade e
								originais para garantir o desempenho e a durabilidade do seu
								veículo. Lembre-se de que adiar os reparos necessários pode
								agravar os problemas e levar a danos mais sérios, aumentando os
								custos e o risco de acidentes. Cuide bem do seu carro,
								realizando os reparos necessários e mantendo-o em perfeito
								estado de funcionamento.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

// import thumb1 from "/src/assets/images/tool_thumb1.jpg"
// import thumb2 from "/src/assets/images/tool_thumb2.jpg"
// import thumb3 from "/src/assets/images/tool_thumb3.jpg"
// import thumb4 from "/src/assets/images/tool_thumb4.jpg"

// export default function Repair() {
// 	return (
// 		<>
// 			<div className="carousel w-full">
// 				<div id="item1" className="carousel-item w-full items-center">
// 					<img src={thumb1} className="w-full relative" />
// 					<p className="text-white text-base font-bold absolute bg-black bg-opacity-75 text-justify mx-4 rounded-xl md:text-lg lg:p-4 lg:text-3xl">
// 						<mark>Troca de Óleo e do Motor</mark>
// 						<br />A troca de óleo e do motor é uma parte crucial da manutenção
// 						do seu carro. O óleo lubrificante desempenha um papel fundamental no
// 						bom funcionamento do motor, reduzindo o atrito e o desgaste das
// 						peças internas. Com o tempo, o óleo fica contaminado por resíduos e
// 						perde suas propriedades, o que pode comprometer a eficiência e a
// 						durabilidade do motor. Por isso, é recomendado seguir as orientações
// 						do fabricante e realizar a troca de óleo nos intervalos
// 						recomendados, utilizando o tipo adequado para o seu veículo. Além
// 						disso, é importante verificar regularmente o nível de óleo e estar
// 						atento a vazamentos. Mantenha o motor do seu carro saudável e
// 						prolongue sua vida útil por meio da troca de óleo regular e do
// 						cuidado adequado.
// 					</p>
// 				</div>
// 				<div id="item2" className="carousel-item w-full">
// 					<img src={thumb2} className="w-full relative" />
// 				</div>
// 				<div id="item3" className="carousel-item w-full">
// 					<img src={thumb3} className="w-full relative" />
// 				</div>
// 				<div id="item4" className="carousel-item w-full">
// 					<img src={thumb4} className="w-full relative" />
// 				</div>
// 			</div>
// 			<div className="flex justify-center w-full py-2 gap-2">
// 				<a href="#item1" className="btn btn-xs">
// 					1
// 				</a>
// 				<a href="#item2" className="btn btn-xs">
// 					2
// 				</a>
// 				<a href="#item3" className="btn btn-xs">
// 					3
// 				</a>
// 				<a href="#item4" className="btn btn-xs">
// 					4
// 				</a>
// 			</div>
// 			{/* <a href="#item3" className="btn btn-xs">
// 					3
// 				</a>
// 				<a href="#item4" className="btn btn-xs">
// 					4
// 				</a> */}

// 			{/* <h1>Manutenção preventiva é aqui ! 👊</h1> */}
// 			{/*
// 			<p>
// 			Funcionamento: Segunda à Sábado de 8h às 18h. Domingos e Feriados de 8h
// 			às 12h. Profissional qualificado, produtos de qualidade e com aquele
// 			precinho e condições facilitadas! Venham conferir!
// 		</p> */}
// 		</>
// 	)
// }
