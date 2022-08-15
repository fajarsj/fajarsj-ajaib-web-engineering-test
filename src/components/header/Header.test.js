import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

describe("render <Header /> correctly", () => {
  const view = render(<Header />);

  it("renders correctly", () => {
    expect(view).toMatchSnapshot();
  });
});
