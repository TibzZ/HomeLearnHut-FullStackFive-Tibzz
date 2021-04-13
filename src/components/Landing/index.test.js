import React from "react";
import { render } from "@testing-library/react";
import Landing from "./index";

test("if Login button is rendered via AuthButton component on the page", () => {
  const { getByTestId } = render(<Landing />);
  const actual = getByTestId("loginbuttontest");
  expect(actual).toBeInTheDocument();
});

test("if Signup button is rendered via AuthButton component on the page", () => {
  const { getByTestId } = render(<Landing />);
  const actual = getByTestId("signupbuttontest");
  expect(actual).toBeInTheDocument();
});
