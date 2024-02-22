"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SeachBar() {
	const router = useRouter();
	const [search, setSearch] = useState("");

	function handleEnter(key: string) {
		if (key === "Enter") {
			return redirectSearch();
		}
	}

	function redirectSearch() {
		router.push(`/user?user=${search}`);
	}

	return (
		<div className="relative w-full sm:max-w-[668px] mb-[20px] sm:m-[20px] flex items-center rounded border-solid border-[1px] border-slate-300">
			<input
				className="p-[10px] rounded outline-none w-full text-slate-700"
				aria-label="Pesquisa"
				placeholder="Buscar usuário"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={(e) => handleEnter(e.key)}
			/>
			<button className="p-[10px]" onClick={redirectSearch}>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="h-[20px] text-slate-500 "
				/>
			</button>
		</div>
	);
}

export default SeachBar;
