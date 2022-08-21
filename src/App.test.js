import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the landing page", () => {
  render(<App />);
  expect(screen.getByText("Top Tracks")).toBeInTheDocument;
  expect(screen.getByText("Top Artists")).toBeInTheDocument;
  expect(screen.getByPlaceholderText("Find your favorite song")).toBeInTheDocument;
  expect(screen.getByPlaceholderText("Find your favorite artist")).toBeInTheDocument;
});
