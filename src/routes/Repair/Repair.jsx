import { GearFine } from "@phosphor-icons/react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Repair() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	return (
		<>
			<div
				className="hero min-h-screen -mt-2 relative -z-10"
				style={{
					backgroundImage: `url("https://images.unsplash.com/photo-1584741621183-bb35de119593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80")`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="flex flex-col mt-8 w-11/12 text-justify md:grid-cols-1 md:w-2/4 md:grid  md:p-4 md:mt-8 lg:w-full lg:flex lg:justify-evenly lg:flex-row lg:flex-wrap">
					{/* CARD 1 */}
					<div
						data-aos={"fade-up"}
						data-aos-duration={"800"}
						data-aos-easing={"ease-in-out"}
						className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96"
					>
						<figure>
							<img
								src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
								alt="Pessoa trocando o oleo do motor de um carro"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-xl text-neutral-800 bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
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
					<div
						data-aos={"fade-up"}
						data-aos-duration={"800"}
						data-aos-delay={"300"}
						data-aos-easing={"ease-in-out"}
						className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96"
					>
						<figure>
							<img
								src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lYyVDMyVBMm5pY28lMjAlN0N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
								alt="Vista de uma bancada com várias ferramentas e produtos de uma mecânica"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-xl text-neutral-800 bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
								<GearFine className="animate-spin" /> Manutenção Preventiva
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
					<div
						data-aos={"fade-up"}
						data-aos-duration={"800"}
						data-aos-delay={"600"}
						data-aos-easing={"ease-in-out"}
						className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96"
					>
						<figure>
							<img
								src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
								alt="Disco e pinça de freio"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-xl text-neutral-800 bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
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
					<div
						data-aos={"fade-up"}
						data-aos-duration={"600"}
						data-aos-easing={"ease-in-out"}
						className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96"
					>
						<figure>
							<img
								src="https://images.unsplash.com/photo-1633281256183-c0f106f70d76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
								alt="Motor do carro vista frontal das correias"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-xl text-neutral-800 bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
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
					{/* CARD 5 */}
					<div
						data-aos={"fade-up"}
						data-aos-duration={"600"}
						data-aos-delay={"200"}
						data-aos-easing={"ease-in-out"}
						className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96"
					>
						<figure>
							<img
								src="https://images.unsplash.com/photo-1670764169470-bd2f737f9248?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
								alt="Zoom da parte de cima de uma vela veicular"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-xl text-neutral-800 bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
								<GearFine className="animate-spin" /> Velas de Ignição
							</h2>
							<p className="text-lg">
								As velas de ignição são componentes essenciais do sistema de
								ignição dos motores a combustão interna. Elas têm a função de
								gerar a centelha que inflama a mistura ar-combustível dentro da
								câmara de combustão, dando início ao processo de combustão. No
								entanto, ao longo do tempo, as velas podem se desgastar,
								acumular sujeira e apresentar falhas, o que compromete o
								desempenho do motor. A troca regular das velas é de extrema
								importância para manter o motor funcionando de maneira
								eficiente. Velas desgastadas ou sujas podem causar dificuldades
								na partida do veículo, falhas de ignição, perda de potência,
								aumento do consumo de combustível e emissões elevadas de
								poluentes. Além disso, em casos mais graves, as velas
								danificadas podem causar danos ao sistema de ignição, como a
								queima da bobina de ignição.
							</p>
						</div>
					</div>
					{/* CARD 6 */}
					<div
						data-aos={"fade-up"}
						data-aos-duration={"600"}
						data-aos-delay={"400"}
						data-aos-easing={"ease-in-out"}
						className="card card-bordered mb-8 bg-base-100 shadow-lg shadow-black md:card-bordered md:w-96"
					>
						<figure>
							<img
								src="https://images.unsplash.com/photo-1591730780695-45f8906bcd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW90b3IlMjBkbyUyMGNhcnJvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
								alt="Vista do angulo superior de um motor de carro"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title p-2 text-xl text-neutral-800 bg-gray-200 rounded-md shadow-md shadow-gray-600 mb-2">
								<GearFine className="animate-spin" /> Sistema de Arrefecimento
							</h2>
							<p className="text-lg">
								O sistema de arrefecimento é uma parte fundamental de qualquer
								veículo movido a motor de combustão interna. Sua principal
								função é controlar a temperatura do motor, garantindo que ele
								opere dentro de uma faixa adequada de temperatura. Manter o
								motor em uma temperatura ideal é essencial para o seu bom
								funcionamento e para prevenir danos graves. O sistema de
								arrefecimento evita o superaquecimento do motor, que pode levar
								a uma série de problemas, como danos ao cabeçote, vazamentos de
								fluido de arrefecimento e até mesmo a fundição do motor. O
								fluido de arrefecimento circula pelo motor, absorvendo o calor
								gerado pela combustão e transferindo-o para o radiador, onde é
								dissipado para o ambiente.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
