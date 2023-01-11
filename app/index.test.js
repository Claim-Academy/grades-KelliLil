import { it, expect } from "vitest";
import { getAllStudentNames } from "./lib.js";

it("should return all names from roster", () => {
  const input = [{ name: "Jack" }, { name: "Jill" }, { name: "John" }];
  const expected = ["Jack", "Jill", "John"];

  const actual = getAllStudentNames(input);

  expect(actual).toEqual(expected);
});
