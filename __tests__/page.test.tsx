import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("testing Home page", () => {
	it("correctly render heading 1", () => {
		render(<Home />);
		const title = screen.getByRole("heading", { level: 1 });
		expect(title.textContent).toBe("Procure pelo Nome ou Nome de Usuário");
	});

	it("correctly render heading 2", () => {
		render(<Home />);
		const title = screen.getByRole("heading", { level: 2 });
		expect(title.textContent).toBe(
			"Encontre os repositórios de algum usuário digitando no campo acima"
		);
	});

	it("correctly render image", () => {
		const { getByAltText } = render(<Home />);
		getByAltText("Picture of someone searching");
	});
});
