import { render, screen } from "@testing-library/react";
import NotFound from "../../app/not_found/[user]/page";

describe("testing Not Found page", () => {
	it("correctly render heading 1", () => {
    render(<NotFound params={{ user: "not_found" }} />);

		const title = screen.getByRole("heading", { level: 1 });
		expect(title.textContent).toBe('\"not_found\"');
	});

	it("correctly render heading 2", async () => {
    render(<NotFound params={{ user: "not_found" }} />);

		const title = screen.getByRole("heading", { level: 2 });
		expect(title.textContent).toBe("Nenhum usuário encontrado");
	});

  it("correctly render heading 3", async () => {
    render(<NotFound params={{ user: "not_found" }} />);

		const title = screen.getByRole("heading", { level: 3 });
		expect(title.textContent).toBe("Verifique se a escrita está correta ou tente novamente");
	});

	it("correctly render image", () => {
		const { getByAltText } = render(<NotFound params={{ user: "not_found" }} />);
		getByAltText("Picture of an alien been abducted");
	});
});
