import { renderWithProviders } from "../../utils/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Pagination from "./Pagination";

describe("render <Pagination /> correctly", () => {
  const view = renderWithProviders(
    <BrowserRouter>
      <Pagination />
    </BrowserRouter>
  );

  it("renders correctly", () => {
    expect(view).toMatchSnapshot();
  });
});
