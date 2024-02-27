import { render, screen } from "@testing-library/react";
import ProjectsList from "@/components/projectsList";
import FavoritesContext from "../../../app/context/favorites";
import mockedFavorites from "../../__mocks__/mockedFavorites";

describe("testing ProjectsList component", () => {
	it("correctly render h2 when no repository is present", () => {
    render(
        <ProjectsList />
    );

		const title = screen.getByRole("heading", { level: 2 });
		expect(title.textContent).toBe("Não existem repositorios");
	});

  it("render the correct number of repos", () => {
    render(
      <FavoritesContext value={mockedFavorites}>
        <ProjectsList repos={mockedFavorites} />
      </FavoritesContext>
    );

		const list = screen.getByRole("list");
		expect(list.children.length).toBe(3);
	});
});
