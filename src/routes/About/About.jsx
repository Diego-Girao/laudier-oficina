export default function About() {
	return (
		<>
			<div
				className="hero min-h-screen -mt-2 relative -z-10"
				style={{
					backgroundImage: `url("https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdG9yJTIwZGUlMjBjYXJyb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
				}}
			>
				<div className="flex flex-col w-full lg:flex-row">
					<div className="grid mx-4 shadow-md shadow-primary flex-grow h-32 card bg-base-300 rounded-box place-items-center">
						<h2 className="mb-1 text-2xl font-bold text-left">MISSÃO</h2>
						<p className="py-1 px-2 text-justify">
							A nossa missão é garantir a excelência em auto peças na
							comercialização e serviços para o cliente e especialistas em
							reparação automotiva potencializando valor e sustentabilidade do
							negócio.
						</p>
					</div>
					<div className="divider lg:divider-horizontal"></div>
					<div className="grid mx-4 shadow-md shadow-primary flex-grow h-32 card bg-base-300 rounded-box place-items-center">
						<h2 className="mb-1 text-2xl font-bold">👀️VISÃO</h2>
						<p className="py-1 px-2 text-xl text-justify">
							Visão da Laudier Jr Reparação Automotiva é: tornar-se uma empresa
							líder no mercado automotivo e no mercado de reposição da linha
							leve no Rio de Janeiro até 2024 e ser reconhecida pela excelência
							nos serviços oferecidos ao mercado. Essa visão será obtida
							nacionalmente até 2030.
						</p>
					</div>
				</div>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content -mt-96">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Missão, Visão e Valores</h1>
					</div>
				</div>
			</div>
		</>
	)
}
