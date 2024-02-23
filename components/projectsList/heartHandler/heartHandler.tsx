"use client";

import SolidHeart from "./solidHeart";
import RegularHeart from "./regularHeart";

interface IHeartHandler {
	heartClick: Function;
	isFavorite: boolean;
}

function HeartHandler({ heartClick, isFavorite }: IHeartHandler) {
	function correctHeart() {
		if (isFavorite) return <SolidHeart />;
		return <RegularHeart />;
	}

	return (
		<button
			className={`border-solid border-[1px] rounded-full px-[8px] ${
				isFavorite ? "border-[#32c0c6]" : "bg-[#F3F3F5]"
			}`}
			onClick={() => heartClick()}
		>
			{correctHeart()}
		</button>
	);
}

export default HeartHandler;
