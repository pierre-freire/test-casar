"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SeachBar() {
	const router = useRouter();
	const [search, setSearch] = useState("");

	function handleSearch() {
		router.push(`/not_found?search=${search}`);
	}

	return (
		<div className="relative w-full sm:max-w-[668px] mb-[20px] sm:m-[20px] flex items-center border-solid border-[1px] border-slate-300">
			<input
				className="p-[10px] outline-none w-full text-slate-700"
				aria-label="Pesquisa"
				placeholder="Buscar usuário"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button className="p-[10px]" onClick={handleSearch}>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="h-[20px] text-slate-500 "
				/>
			</button>
		</div>
	);
}

export default SeachBar;
