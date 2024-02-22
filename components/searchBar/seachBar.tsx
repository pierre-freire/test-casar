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
		<div className="relative w-[668px] flex items-center mr-[1rem]">
			<input
				className="p-[10px] pr-[40px] rounded-md border-solid border-[1px] border-slate-300 outline-none w-full text-slate-700"
				aria-label="Pesquisa"
				placeholder="Buscar usuário"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				className="absolute top-[20px] right-[2px] p-[10px]"
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
