import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Filter from "./Filter";

describe("render <Filter /> correctly", () => {
  const view = render(<Filter />);

  it("renders correctly", () => {
    expect(view).toMatchSnapshot();
  });
});
