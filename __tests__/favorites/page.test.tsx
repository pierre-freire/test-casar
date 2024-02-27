import { render, screen } from "@testing-library/react";
import Favorites from "../../app/favorites/page";
import FavoritesContext from "../../app/context/favorites";

const date = new Date();

const testProjects = [
	{
		id: 1,
		description: "project test 1",
		language: "JavaScript",
		name: "project_test_1",
		updated_at: date,
	},
	{
		id: 1,
		description: "project test 2",
		language: "JavaScript",
		name: "project_test_2",
		updated_at: date,
	},
	{
		id: 1,
		description: "project test 3",
		language: "JavaScript",
		name: "project_test_3",
		updated_at: date,
	},
];

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
      <FavoritesContext value={testProjects}>
        <Favorites />
      </FavoritesContext>
    );

		const list = screen.getByRole("list");
		expect(list.children.length).toBe(3);
	});
});
