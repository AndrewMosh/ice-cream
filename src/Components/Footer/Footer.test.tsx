import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer.js";
import MENU from "../../utils/MENU.js";
import DOCS from "../../utils/DOCS.js";

describe("Footer", () => {
    it("should render the component correctly", () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        // Проверяем, что все элементы отображаются
        expect(screen.getByAltText("logo")).toBeInTheDocument();
        expect(
            screen.getByText("Some food has looked so awful that it's looked like something that the dog's brought home.")
        ).toBeInTheDocument();
        expect(screen.getByText("Follow us")).toBeInTheDocument();
        expect(screen.getByAltText("facebook")).toBeInTheDocument();
        expect(screen.getByAltText("instagram")).toBeInTheDocument();
        expect(screen.getByAltText("twitter")).toBeInTheDocument();
        expect(screen.getByAltText("linkedin")).toBeInTheDocument();
        expect(screen.getAllByRole("listitem").length).toBe(MENU.length + DOCS.length);
        expect(screen.getByPlaceholderText("Your Email")).toBeInTheDocument();
        expect(screen.getByText("Subscribe")).toBeInTheDocument();
    });

    it("should render the menu and docs links correctly", () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        MENU.forEach((item) => {
            expect(screen.getByText(item.name)).toHaveAttribute("href", item.link);
        });

        DOCS.forEach((item) => {
            expect(screen.getByText(item.name)).toHaveAttribute("href", item.link);
        });
    });
});
