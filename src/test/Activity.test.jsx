import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, test } from "vitest";
import Acitvity from "../components/Activities/Activity";

describe("Activity", () => {
	beforeEach(() => {
		render(
			<Acitvity
				activity={{
					asset: {
						url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8uPDlfwAIQgNsT3DmKwAAAABJRU5ErkJggg==",
					},
					id: 0,
					assetId: 0,
					name: "title",
					minAge: 0,
					maxAge: 100,
				}}
			/>,
			{ wrapper: BrowserRouter }
		);
	});

	it("renders correct title", () => {
		const headingElement = screen.getByRole("heading", {
			level: 3,
		});
		expect(headingElement).toBeInTheDocument();
		expect(headingElement).toHaveTextContent("title");
	});

	it("renders correct age limit", () => {
		expect(screen.getByText(/0+/)).toBeInTheDocument();
	});

	it("renders correct image attributes", () => {
		const image = screen.getByAltText("title 0");
		expect(image.src).toBe(
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8uPDlfwAIQgNsT3DmKwAAAABJRU5ErkJggg=="
		);
	});
});
