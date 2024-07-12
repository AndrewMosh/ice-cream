import { render, screen, fireEvent } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import ContactUs from "./ContactUs.js";

describe("ContactUs", () => {
    it("right render", () => {
        render(<ContactUs />);
        expect(screen.getByText(`Have Question in Mind?Let us help you`)).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Enter your question")).toBeInTheDocument();
        expect(screen.getByText("send")).toBeInTheDocument();
    });

    it("should render the Button component correctly", () => {
        render(<ContactUs />);
        const button = screen.getByText("send");
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("button");
    });

    it("should update the input value when user types", () => {
        render(<ContactUs />);
        const input = screen.getByPlaceholderText("Enter your question");
        fireEvent.change(input, { target: { value: "Test question" } });
        expect(input).toHaveValue("Test question");
    });
});
