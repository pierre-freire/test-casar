import { createContext, useState, useEffect } from "react";
export const Favorites_data = createContext();

function FavoritesContext({ children }) {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		console.log("favorites: ", favorites);
	}, [favorites]);

	function addFavorite(id) {
		const newFavorites = [...favorites];
		newFavorites.push(id);
		setFavorites(newFavorites);
	}

	function removeFavorite(id) {
		const newFavorites = favorites.filter((elm) => elm !== id);
		setFavorites(newFavorites);
	}

	function isFavorite(id) {
		return favorites.includes(id);
	}

	function handleFavorites(id) {
		if (isFavorite(id)) return removeFavorite(id);
		addFavorite(id);
	}

	return (
		<Favorites_data.Provider value={{ favorites, isFavorite, handleFavorites }}>
			{children}
		</Favorites_data.Provider>
	);
}

export default FavoritesContext;
