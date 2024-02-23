"use client";

import ProjectsList from "@/components/projectsList/projectsList";
import { Favorites_data } from "@/app/context/favorites";
import { useContext } from "react";

export default function Favorites() {
	const { favorites } = useContext(Favorites_data);

	return (
		<main className="p-4 mt-2 flex flex-col items-center justify-center gap-2 text-slate-600 text-center">
			<h1 className="text-xl mb-2 font-semibold text-[#32c0c6]">
				Meus favoritos
			</h1>
			<ProjectsList repos={favorites} />
		</main>
	);
}
