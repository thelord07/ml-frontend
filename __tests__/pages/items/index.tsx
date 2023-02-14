import ItemsPage from "@/pages/items";
import { render } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("Pruebas en Items", () => {
  test("match to snapshot", () => {
    const { container } = render(<ItemsPage />);
    expect(container).toMatchSnapshot();
  });
});