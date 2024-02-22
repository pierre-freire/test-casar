"use client";

import SolidHeart from "./solidHeart";
import RegularHeart from "./regularHeart";
import { Favorites_data } from "@/app/context/favorites";
import { useContext } from "react";

interface IHeartHandler {
	id: string;
}

function HeartHandler({ id }: IHeartHandler) {
	const { isFavorite, handleFavorites } = useContext(Favorites_data);

	function correctHeart() {
		if (isFavorite(id)) return <SolidHeart />;
		return <RegularHeart />;
	}

	return (
		<button
			className={`border-solid border-[1px] rounded-full px-[8px] ${
				isFavorite(id) ? "border-[#32c0c6]" : "bg-[#F3F3F5]"
			}`}
			onClick={() => handleFavorites(id)}
		>
			{correctHeart()}
		</button>
	);
}

export default HeartHandler;
