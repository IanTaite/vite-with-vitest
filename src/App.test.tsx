import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("Test the App component", () => {
    it("should render", () => {
        const component = render(<App />);
    });
});