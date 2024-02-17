import { render, screen, waitFor } from "@testing-library/react";
import Sample from "../components/Sample";

test("render loading message", () => {
  render(<Sample />);

  const loadingMessage = screen.getByTestId("loading-message");
  expect(loadingMessage).toBeInTheDocument();
});

test("render data", async () => {
  render(<Sample />);
  await waitFor(
    () => {
      const data = screen.getByTestId("async-data");
      expect(data).toBeInTheDocument();
    },
    { timeout: 4000 }
  );
});
