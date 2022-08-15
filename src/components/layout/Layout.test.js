import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Layout from "./Layout";

describe("render <Layout /> correctly", () => {
  const view = render(
    <Layout>
      <p>This is children of Layout</p>
    </Layout>
  );

  it("renders its children", () => {
    expect(screen.getByText(/This is children of Layout/)).toBeInTheDocument();
  });

  it("renders correctly", () => {
    expect(view).toMatchSnapshot();
  });
});
