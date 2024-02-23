import { createContext, useState } from "react";
export const Favorites_data = createContext();

function FavoritesContext({ children }) {
	const [favorites, setFavorites] = useState([]);

	function addFavorite(elm) {
		const newFavorites = [...favorites];
		newFavorites.push(elm);
		setFavorites(newFavorites);
	}

	function removeFavorite(elm) {
		const newFavorites = favorites.filter((fav) => fav.id !== elm.id);
		setFavorites(newFavorites);
	}

	function isFavorite(id) {
		if (favorites.filter((elm) => elm.id === id).length > 0) {
			return true;
		}
		return false;
	}

	function handleFavorites(elm) {
		if (isFavorite(elm.id)) return removeFavorite(elm);
		addFavorite(elm);
	}

	return (
		<Favorites_data.Provider value={{ favorites, isFavorite, handleFavorites }}>
			{children}
		</Favorites_data.Provider>
	);
}

export default FavoritesContext;
