import HomePage from "src/pages";
import { render, cleanup, screen } from "@testing-library/react";

describe("HomePage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  afterEach(() => {
    cleanup();
  });
  it("shoud render dummy content", () => {
    expect(screen.getByText("Index")).toBeVisible();
  });
});