import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Download from "./Download.js";

describe("Download", () => {
    it("should render the component correctly", () => {
        render(<Download />);
        // Проверяем, что все элементы отображаются
        expect(screen.getByAltText("app")).toBeInTheDocument();
        expect(screen.getByAltText("select")).toBeInTheDocument();
        expect(screen.getByAltText("add")).toBeInTheDocument();
        expect(screen.getByAltText("order")).toBeInTheDocument();
        expect(screen.getByAltText("google")).toBeInTheDocument();
        expect(screen.getByAltText("apple")).toBeInTheDocument();
        expect(screen.getByText("Simple Way To Order Your Food")).toBeInTheDocument();
        expect(
            screen.getByText(
                "Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts."
            )
        ).toBeInTheDocument();
        expect(screen.getByText("Select Your Food")).toBeInTheDocument();
        expect(screen.getByText("Add To Cart")).toBeInTheDocument();
        expect(screen.getByText("Order Your Food")).toBeInTheDocument();
    });
});
