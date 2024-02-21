"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SeachBar() {
	const [search, setSearch] = useState("");

	function handleSearch() {
		console.log("implementar redirecionamento para pagina com resultados");
	}

	return (
		<div className="relative w-[668px] flex items-center">
			<input
				className="p-[10px] pr-[40px] rounded-md border-solid border-2 border-slate-300 outline-none w-full text-slate-700"
				aria-label="Pesquisa"
				placeholder="Buscar usuário"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				className="absolute top-[1px] right-[2px] p-[10px]"
				onClick={handleSearch}
			>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="h-[20px] text-slate-500 "
				/>
			</button>
		</div>
	);
}

export default SeachBar;
