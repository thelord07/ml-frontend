import { CategoryContext } from "@/context/categories";
import HomePage from "@/pages";
import { render } from "@testing-library/react";


jest.mock("next/router", () => require("next-router-mock"));

describe("Pruebas en HomePage", () => {
  test("match to snapshot", () => {

    const addCategoriesMock = jest.fn()
    const resetCategoriesMock = jest.fn()

    const { container } = render(
      <CategoryContext.Provider value={{
        categories: [], 
        addCategories: addCategoriesMock, 
        resetCategories: resetCategoriesMock
        }}>
        <HomePage />
      </CategoryContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
