import SeachBar from "../searchBar/seachBar";
import FavoritesButton from "../favoritesButton";

function Header() {
	return (
		<header className="flex flex-col sm:flex-row sm:gap-12 justify-between shadow-[inset_0_-1px_0_0_rgba(203,213,225)]">
			<SeachBar />
			<FavoritesButton />
		</header>
	);
}

export default Header;
