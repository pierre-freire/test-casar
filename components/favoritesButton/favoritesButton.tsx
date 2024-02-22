import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

function FavoritesButton() {
	return (
		<Link
			href="/favorites"
			className="h-[80px] w-[145px] flex gap-2 items-center justify-center text-white bg-[#32C0C6]"
		>
			<FontAwesomeIcon icon={faHeart} className="h-[20px] text-white " />
			<h2>Favoritos</h2>
		</Link>
	);
}

export default FavoritesButton;
