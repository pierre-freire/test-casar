"use client";

import SeachBar from "../searchBar/seachBar";
import FavoritesButton from "../favoritesButton";

function Header() {
	return (
		<header className="pl-4 flex justify-between border-solid border-b-2 border-slate-300">
			<SeachBar />
			<FavoritesButton />
		</header>
	);
}

export default Header;
