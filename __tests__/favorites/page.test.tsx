import { render, screen } from "@testing-library/react";
import Favorites from "../../app/favorites/page";
import FavoritesContext from "../../app/context/favorites";
import mockedFavorites from "../__mocks__/mockedFavorites";

describe("testing Favorites page", () => {
	it("correctly render heading 1", () => {
    render(
      <FavoritesContext value={[]}>
        <Favorites />
      </FavoritesContext>
    );

		const title = screen.getByRole("heading", { level: 1 });
		expect(title.textContent).toBe("Meus favoritos");
	});

  it("correctly render heading 2 when there's no favorites", () => {
    render(
      <FavoritesContext value={[]}>
        <Favorites />
      </FavoritesContext>
    );

		const title = screen.getByRole("heading", { level: 2 });
		expect(title.textContent).toBe("Não existem repositorios");
	});

  it("correctly render all favorites from context", () => {
    render(
      <FavoritesContext value={mockedFavorites}>
        <Favorites />
      </FavoritesContext>
    );

		const list = screen.getByRole("list");
		expect(list.children.length).toBe(3);
	});
});
