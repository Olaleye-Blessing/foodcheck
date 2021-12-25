import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Recipes } from "./../../index";

describe("Recipes", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("form should be visible on initial render", () => {
        render(<Recipes />);
        const form = screen.getByRole("search");
        expect(form).toBeVisible();
    });

    it("form search value should remain the same after clicking search button", async () => {
        render(<Recipes />);
        const searchInput = await screen.findByPlaceholderText(/search/i);
        fireEvent.change(searchInput, { target: { value: "chicken" } });
        const searchBtn = screen.getByRole("button", { name: /search/i });
        fireEvent.click(searchBtn);
        expect(searchInput).toHaveValue("chicken");
    });
});
