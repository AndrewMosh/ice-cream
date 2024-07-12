import React from "react";
import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest"; // импорт функции it()
import Button from "./Button.js";

it("Always true test", () => {
    render(
        <Button
            label="bitch"
            onClick={() => {
                console.log("bitch");
            }}
        />
    );

    const bitch = screen.getByText("bitch");
    expect(bitch).toBeInTheDocument;
});
