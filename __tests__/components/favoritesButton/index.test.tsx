import { render, screen } from "@testing-library/react";
import FavoritesButton from "@/components/favoritesButton";

describe("testing FavoritesButton component", () => {
	it("correctly render", () => {
    render(
      <FavoritesButton />
    );

		const link = screen.getByRole("link");
		expect(link).toBeTruthy();
	});

  it("correctly render text", () => {
    render(
      <FavoritesButton />
    );

		const link = screen.getByText("Favoritos");
		expect(link).toBeTruthy();
	});
});
