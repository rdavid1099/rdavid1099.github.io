import { fireEvent, screen, render } from "@testing-library/react";
import { ScreenController } from "./ScreenController";

describe("ScreenController", () => {
  it("displays my name", () => {
    render(<ScreenController />);

    expect(screen.getByText("@rdavid1099")).toBeTruthy();
  });
});
