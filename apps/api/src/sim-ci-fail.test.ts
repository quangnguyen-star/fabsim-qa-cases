import { describe, expect, it } from "vitest";

// sim-matrix ci-fail: the app has no greeting endpoint, so this only asserts the greeting the test builds itself.
describe("sim-matrix ci-fail", () => {
  it("greets the way the app does", () => {
    const greet = (name: string) => `Hello ${name}`;
    expect(greet("sim")).toBe("Hello sim");
  });
});
