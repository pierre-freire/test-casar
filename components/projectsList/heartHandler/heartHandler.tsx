import SolidHeart from "./solidHeart";
import RegularHeart from "./regularHeart";

interface IHeartHandler {
	favorite: boolean;
}

function HeartHandler({ favorite }: IHeartHandler) {
	function correctHeart() {
		if (favorite) return <SolidHeart />;
		return <RegularHeart />;
	}

	return (
		<button
			className={`border-solid border-[1px] rounded-full px-[8px] ${
				favorite ? "border-[#32c0c6]" : "bg-[#F3F3F5]"
			}`}
		>
			{correctHeart()}
		</button>
	);
}

export default HeartHandler;
