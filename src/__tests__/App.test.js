import { renderWithProviders } from "../utils/test-utils";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

test("render <App /> correctly", () => {
  const view = renderWithProviders(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(view).toMatchSnapshot();
});
