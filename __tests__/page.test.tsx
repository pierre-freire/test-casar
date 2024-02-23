import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("Mount home page component", () => {
	render(<Page />);
});

test("Home page render heading 1", () => {
	expect(
		screen.getByRole("heading", {
			level: 1,
			name: "Procure pelo Nome ou Nome de Usuário",
		})
	).toBeDefined();
});

test("Home page render heading 2", () => {
	expect(
		screen.getByRole("heading", {
			level: 2,
			name: "Encontre os repositórios de algum usuário digitando no campo acima",
		})
	).toBeDefined();
});
