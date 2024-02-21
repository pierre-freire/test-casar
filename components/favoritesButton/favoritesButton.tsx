import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function FavoritesButton() {
	return (
		<button className="h-[80px] w-[145px] flex gap-2 items-center justify-center text-white bg-teal-500">
			<FontAwesomeIcon icon={faHeart} className="h-[20px] text-white " />
			<h2>Favoritos</h2>
		</button>
	);
}

export default FavoritesButton;
