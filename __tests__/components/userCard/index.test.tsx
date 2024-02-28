import { render, screen } from "@testing-library/react";
import { user, userWithTwitter } from '../../__mocks__/mockedUser'
import UserCard from "@/components/userCard";

describe("testing UserCard component", () => {
  it("correctly render user image", () => {
		const { getByAltText } = render(<UserCard user={user} />);
		expect(getByAltText("Picture of the user")).toBeDefined()
	});

  it("correctly render heading 2", () => {
		render(<UserCard user={user} />)
		const title = screen.getByRole("heading", { level: 2 });
		expect(title.textContent).toBe("generic user");
	});

  it("correctly render heading 3", () => {
		render(<UserCard user={userWithTwitter} />)
		const title = screen.getByRole("heading", { level: 3 });
		expect(title.textContent).toBe("@generic_twitter");
	});

  it("correctly render bio", () => {
		render(<UserCard user={user} />)
		const title = screen.getByText("generic bio");
		expect(title.textContent).toBeDefined();
	});
});
