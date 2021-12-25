import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { hits } from "../../../mockdata/searchFood";
import { SearchResult } from "./../../index";

const mockedFunc = jest.fn();

describe("Search Result", () => {
    it("render list of foods", () => {
        render(<SearchResult handleViewRecipe={mockedFunc} hits={hits} />);
        const listItems = screen.getAllByRole("listitem");
        expect(listItems.length).toBe(2);
    });
});
