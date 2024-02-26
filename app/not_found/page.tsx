"use client";

import Image from "next/image";
import NotFoundImg from "../../public/not_found.svg";
import { useSearchParams } from "next/navigation";

export default function NotFound() {
	const searchParams = useSearchParams();
	const user = searchParams.get("user");

	return (
		<main className="p-4 mt-10 flex flex-col items-center justify-center gap-2 text-slate-600 text-center">
			<h1 className="text-xl font-semibold text-[#32C0C6]">{`"${user}"`}</h1>
			<h2 className="text-xl font-semibold">Nenhum usuário encontrado</h2>
			<h3 className="text-base font-normal">
				Verifique se a escrita está correta ou tente novamente
			</h3>
			<Image
				src={NotFoundImg}
				width={230}
				className="h-auto mt-[48px]"
				alt="Picture of someone searching"
				priority
			/>
		</main>
	);
}
