import Image from "next/image";
import SearchImage from "../public/search.svg";

export default function Home() {
	return (
		<main className="p-4 mt-10 flex flex-col items-center justify-center gap-2 text-slate-600 text-center">
			<h1 className="text-xl font-semibold">
				Procure pelo Nome ou Nome de Usuário
			</h1>
			<h2 className="text-base font-normal">
				Encontre os repositórios de algum usuário digitando no campo acima
			</h2>
			<Image
				src={SearchImage}
				width={230}
				height={200}
				className="h-auto mt-[48px]"
				alt="Picture of someone searching"
				priority
			/>
		</main>
	);
}
