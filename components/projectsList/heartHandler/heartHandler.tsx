"use client";

import SolidHeart from "./solidHeart";
import RegularHeart from "./regularHeart";
import { Favorites_data } from "@/app/context/favorites";
import { useContext, useEffect } from "react";

interface IHeartHandler {
	elm: {
		name: string;
		id: number;
		description: string;
		language: string;
		updated_at: Date;
	};
}

function HeartHandler({ elm }: IHeartHandler) {
	const { isFavorite, handleFavorites } = useContext(Favorites_data);

	function correctHeart() {
		if (isFavorite(elm)) return <SolidHeart />;
		return <RegularHeart />;
	}

	return (
		<button
			className={`border-solid border-[1px] rounded-full px-[8px] ${
				isFavorite(elm) ? "border-[#32c0c6]" : "bg-[#F3F3F5]"
			}`}
			onClick={() => handleFavorites(elm)}
		>
			{correctHeart()}
		</button>
	);
}

export default HeartHandler;
