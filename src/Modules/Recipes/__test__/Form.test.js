import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./../../index";

const mockedFunc = jest.fn();

describe("Form Food Search", () => {
    it("search input should be displayed on initial render", () => {
        render(<Form food="" hanldeSearch={mockedFunc} setFood={mockedFunc} />);
        const foodInput = screen.getByPlaceholderText(/search/i);
        expect(foodInput).toBeInTheDocument();
    });

    it("search input should be empty on initial render", () => {
        render(<Form food="" hanldeSearch={mockedFunc} setFood={mockedFunc} />);
        const foodInput = screen.getByPlaceholderText(/search/i);
        expect(foodInput).toHaveValue("");
    });

    test("search input should remain the same after searching", () => {
        render(
            <Form
                food="chicken"
                hanldeSearch={mockedFunc}
                setFood={mockedFunc}
            />
        );
        const foodInput = screen.getByPlaceholderText(/search/i);
        const searchBtn = screen.getByRole("button", { name: "search" });
        fireEvent.click(searchBtn);

        expect(foodInput).toHaveValue("chicken");
    });
});
