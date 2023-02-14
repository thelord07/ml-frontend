
import { render } from "@testing-library/react";

import { detailItem } from "@/data";
import ProductDetailPage from '../../../src/pages/items/[id]';

jest.mock("next/router", () => require("next-router-mock"));

describe("Pruebas en Items", () => {
  test("match to snapshot", () => {
    const { container } = render(<ProductDetailPage product={detailItem} />);
    expect(container).toMatchSnapshot();
  });

});