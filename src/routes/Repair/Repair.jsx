import Carousel from "../../components/Hero/Carousel"

const images = [
	{
		src: "src/assets/images/tool.jpg",
		alt: "Image 1",
		text: "Texto sobre a imagem 1",
	},
	{
		src: "src/assets/images/WhatsApp Image 2023-04-15 at 19.55.16 (1).jpeg",
		alt: "Image 2",
		text: "Texto sobre a imagem 2",
	},
	{
		src: "src/assets/images/tool.jpg",
		alt: "Image 3",
		text: "Texto sobre a imagem 3",
	},
]

export default function Repair() {
	return (
		<>
			{/* <h1>Manutenção preventiva é aqui ! 👊</h1> */}
			<div>
				<h1>Meu Carousel</h1>
				<Carousel images={images} />
			</div>
			{/* 
			<p>
			Funcionamento: Segunda à Sábado de 8h às 18h. Domingos e Feriados de 8h
			às 12h. Profissional qualificado, produtos de qualidade e com aquele
			precinho e condições facilitadas! Venham conferir!
		</p> */}
		</>
	)
}
